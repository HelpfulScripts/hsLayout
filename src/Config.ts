/**
 * ## Config 
 * Tool to configure a tree of mithril components via an object literal or as a JSON file.
 * The object format is `{ <name>: { <Component>: <options>}, ...}`.
 * The name `root` is required an defines the top of the tree. Other named sections are allowed and
 * can be used to structure the obect in a more readable and maintainable format.
 * 
 * ### Example:
 * In the example below, the comnponents `Layout`, `LeftNav`, `MainNav` will be resolved against modules
 * provided in the `context` parameter when creating the `Config` node. 
 * ```
 * {
 *  root: { Layout: {
 *      rows:  ["30px", "fill", "10px"],
 *      css: '.my-example',
 *      content: ['Header', 'Body', 'Footer]
 *  }},
 *  Header: { Layout:{
 *      columns: ["200px", "fill"],
 *      content: ['Left Header', 'Main Header']
 *  }},
 *  Body: { Layout:{
 *      columns: ["200px", "fill"], 
 *      content: ['LeftNav', 'MainNav']
 *  }},
 *  Footer: { Layout: {
 *      css: '.hs-site-footer',
 *      content: ['(c) Helpful ; Scripts']
 *  }},
 *  LeftNav:  { LeftNav:  { lib:"route.lib", field:"route.field"}},
 *  MainNav:  { MainNav:  { lib:"route.lib", field:"route.field"}}
 * }
 * ```
 * 
 * ### Calling pattern
 * Instantiate the component via
 * ```
 *  m(Config, { 
 *      source: src, // a file name, or obect literal
 *      context:[]   // a list of es6 modules against which to resolve components at runtime 
 *  });
 * ```
 * Additional parameters can be passed to the root node. The example below establishes routing and passes
 * `field` and `lib` to the root node:
 * ```
 *  class Router {
 *      view(node:Vnode) { 
 *          return m(Config, Object.assign({source: src, context: [hslayout, header, left, main]}, node.attrs));
 *      }
 *  }
 *  m.route(document.body, '/api', { 
 *      '/api':             Router,
 *      '/api/:lib':        Router,
 *      '/api/:lib/:field': Router
 *  });
 * ```
 */

 /** */
import { m, Vnode } from './mithril'; 

/**
 * `Component` class that creates a tree of mithril components out of a configuration obect or file.
 */
export class Config {
    oninit(node:Vnode) {
        const context:any[] = node.attrs.context;
        if (typeof node.attrs.source === 'string') { 
            if (!node.state.cfg) { m.request({ method: "GET", url: node.attrs.source }).then((s:any)=> {
// console.log(`Config read ${s}`);                
                node.state.cfg = translate(s, s.root, context);
            }); }      
        } else {
            node.state.cfg = translate(node.attrs.source, node.attrs.source.root, context);
        }
    }
    view(node:Vnode) { 
        const cfg = node.state.cfg;
// console.log(`Config view ${cfg}`);        
        return (cfg && cfg.compClass)? m(cfg.compClass, Object.assign(cfg.attrs, node.attrs)) : m('div', 'waiting');
    }
}

/**
 * recursively translates a configuration, trying to fetch the class definition for each element (key) in `config`. 
 * If successful, it creates an object literal containing the component class and its attributes.
 * If unsuccessful, the element's value is returned unaltered so that it can be consumed 
 * by an instance further up in the recursion tree.
 * @param config an object literal containing the entire configuration tree
 * @param subcfg an object literal containing a configuration subtree
 * @param context an array of objects against which to instantiate elements of `config`.
 * @return an object literal representing the configuration, with Class names resolved 
 * against the provided `context`.
 */
function translate(config:any, subcfg:any, context:any[]) {
    // resolve if synonym
    if (isSynonym(config, subcfg)) { subcfg = config[subcfg]; }
    // return if primitive
    if (['string', 'number', 'boolean', 'function'].indexOf(typeof subcfg)>=0) { return subcfg; }
    let result = subcfg.length? [] : {};
    // step through options 
    const options = Object.keys(subcfg);
    options.map((opt:string):Vnode => {
        const cl:any = resolve(opt, context);
        const content = translate(config, subcfg[opt], context); 
        if (cl) { 
            const r = {
                compClass:cl,   // Component class
                attrs:content   // attributes passed to the Component class
            };
            (!Array.isArray(subcfg) && options.length === 1)? 
                result = r : 
                result[opt] = r;   
        }
        else { result[opt] = content; }
    }); 
    return result; 
}

/**
 * resolves the symbol `sym` against the provided `context`.
 * If successful, returns the class definition for `sym`. 
 * @param sym the symbol to resolve
 * @param context the context to resolve against; `mithril` and `hsLayout` 
 * are implicitely part of the context and need not be specified.
 * @return the resolved Class, or `undefined`.
 */
function resolve(sym:string, context:any[]) {
    let cl:any;
    context.some((c:any) =>  cl = c[sym]);
    return cl;
}

function isSynonym(config:any, key:any) { return typeof key === 'string' && config[key]; }
