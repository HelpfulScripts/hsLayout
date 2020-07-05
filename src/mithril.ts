/**
 * translates mithril libraries to an ES6 module and provides some Typescript type shortcuts.
 */


/**
 * import and re-export the mithril m objkect
 */
import _m from "mithril";

export const m = _m;
export type Vnode = _m.Vnode<any, any>;
