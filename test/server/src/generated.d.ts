/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import { JSXElements } from '@stencil/core';




export namespace StencilComponents {

  interface AppRoot {}
  interface AppRootAttributes extends JSXElements.HTMLAttributes {}

  interface CurrentDate {}
  interface CurrentDateAttributes extends JSXElements.HTMLAttributes {}
}

export interface LocalIntrinsicElements {
  'app-root': StencilComponents.AppRootAttributes;
  'current-date': StencilComponents.CurrentDateAttributes;
}

declare global {

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCurrentDateElement extends StencilComponents.CurrentDate, HTMLStencilElement {}
  var HTMLCurrentDateElement: {
    prototype: HTMLCurrentDateElement;
    new (): HTMLCurrentDateElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'current-date': HTMLCurrentDateElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'current-date': HTMLCurrentDateElement;
  }
}


import { DefaultIntrinsicElements } from '@stencil/core';

declare global {
  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends LocalIntrinsicElements, DefaultIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends JSXElements.HTMLAttributes {}
}

