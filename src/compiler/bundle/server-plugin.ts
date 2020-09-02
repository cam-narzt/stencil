import type * as d from '../../declarations';
import { normalizeFsPath } from '@utils';
import type { Plugin } from 'rollup';
import ts from 'typescript';

export const serverPlugin = (config: d.Config, platform: string): Plugin => {
  const isHydrateBundle = platform === 'hydrate';
  const serverVarid = `@removed-server-code`;

  const externals = config.outputTargets.reduce((externals, o) => {
    if (o.type === 'dist-hydrate-script') {
      o.external.forEach(external => {
        if (!externals.includes(external)) {
          externals.push(external);
        }
      });
    }
    return externals;
  }, [] as string[]);

  return {
    name: 'serverPlugin',

    resolveId(id) {
      if (id === serverVarid) {
        return id;
      }
      if (isHydrateBundle) {
        if (externals.includes(id)) {
          // don't attempt to bundle node builtins for the hydrate bundle
          return {
            id,
            external: true,
          };
        }
        id = normalizeFsPath(id);
        if (id.includes('.server/') || id.endsWith('.server')) {
          // any path that has .server in it shouldn't actually
          // be bundled in the web build, only the hydrate build
          return serverVarid;
        }
      }
      return null;
    },

    load(id) {
      if (id === serverVarid) {
        return {
          code: 'export default {};',
          syntheticNamedExports: true,
        };
      }
      return null;
    },
  };
};