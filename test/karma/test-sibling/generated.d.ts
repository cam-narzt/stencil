/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import { JSXElements } from '@stencil/core';




export namespace StencilComponents {

  interface SiblingRoot {}
  interface SiblingRootAttributes extends JSXElements.HTMLAttributes {}
}

export interface LocalIntrinsicElements {
  'sibling-root': StencilComponents.SiblingRootAttributes;
}

declare global {

  interface HTMLSiblingRootElement extends StencilComponents.SiblingRoot, HTMLStencilElement {}
  var HTMLSiblingRootElement: {
    prototype: HTMLSiblingRootElement;
    new (): HTMLSiblingRootElement;
  };

  interface HTMLElementTagNameMap {
    'sibling-root': HTMLSiblingRootElement
  }

  interface ElementTagNameMap {
    'sibling-root': HTMLSiblingRootElement;
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

