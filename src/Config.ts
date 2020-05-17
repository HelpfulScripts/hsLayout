/**
 * ## Config 
 * Tool to configure a tree of mithril components via an object literal or as a JSON file.
 * The object format is `{ <name>: { <Component>: <options>}, ...}`.
 * The name `root` is required and defines the top of the tree. Other named sections are allowed and
 * can be referenced by name inside the `root` structure, 
 * This can be used to structure the obect in a more readable and maintainable format.
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
 *      css: '.hsdocs_footer',
 *      content: ['(c) Helpful ; Scripts']
 *  }},
 *  LeftNav:  { LeftNav:  { lib:"route.lib", field:"route.field"}},
 *  MainNav:  { MainNav:  { lib:"route.lib", field:"route.field"}}
 * }
 * ```
 * <example>
 * <file name='script.js'>
 * const theContent = {
 *      root: { Layout: {
 *          rows:  ["30px", "fill", "30px"],
 *          css: '.my-example',
 *          content: ['Header', 'Body', 'Footer']
 *      }},
 *      Header: { Layout:{
 *          columns: ["100px", "fill"],
 *          content: ['Left Header', 'Main Header']
 *      }},
 *      Body: { Layout:{
 *          columns: ["100px", "fill"], 
 *          content: ['LeftNav', 'MainNav']
 *      }},
 *      Footer: { Layout: {
 *          css: '.my-footer',
 *          content: ['(c) Helpful Scripts']
 *      }}
 * }
 * m.mount(root, {view: () => 
 *      m(hsLayout.Config, { 
 *          source: theContent, // a file name, or obect literal
 *          context:[hsLayout]  // a list of es6 modules against which to resolve components at runtime 
 *      })
 * });
 * </file>
 * </example>
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
 *          return m(Config, Object.assign({source: src, context: [hsLayout]}, node.attrs));
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
import { m, Vnode }     from './mithril'; 
import { Log }  from 'hsutil'; const log = new Log('Config'); 

/**
 * `Component` class that creates a tree of mithril components out of a configuration obect or file.
 */
export class Config {
    async oninit(node:Vnode) {
        const context:any[] = node.attrs.context;
        if (!node.state.cfg) {
            const s = (typeof node.attrs.source === 'string')?
                await m.request({ method: "GET", url: node.attrs.source})
              : node.attrs.source;
            node.state.cfg = translate(s, s.root, context);
        }
    }
    view(node:Vnode) { 
        const cfg = node.state.cfg;
        return (cfg && cfg.compClass)? m(cfg.compClass, Object.assign(Object.assign({}, cfg.attrs), node.attrs)) : m('div', 'waiting');
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
        // if a class resolution exists:
        if (cl) { 
            log.debug(()=>`resolved class '${opt}' to ${log.inspect(cl, {depth:1})}`);
            const r = {
                compClass:cl,   // Component class
                attrs:content   // attributes passed to the Component class
            };
            (!Array.isArray(subcfg) && options.length === 1)? 
                result = r : 
                result[opt] = r;   
        }
        // otherwise, if no class resolution exists:
        else { 
            if (isNaN(parseInt(opt))) {
                log.debug(()=>`resolved direct '${opt}' to ${log.inspect(content)}`);
            }
            result[opt] = content; 
        }
    }); 
    return result; 
}

/**
 * resolves the symbol `sym` against the provided `context`.
 * If `context` has a key `sym`, returns `context[sym]` as the literal definition for `sym`. 
 * @param sym the symbol to resolve
 * @param context the context to resolve against; `mithril` and `hsLayout` 
 * are implicitely part of the context and need not be specified.
 * @return the resolved Class, or `undefined`.
 */
function resolve(sym:string, context:any[]) {
    log.debug(()=>`resolving ${sym} in context '${log.inspect(context)}'`);
    let cl:any;
    context.some((c:any) =>  cl = c[sym]);
    log.debug(()=>`resolving ${sym} => ${log.inspect(cl)}`);
    return cl;
}

function isSynonym(config:any, key:any) { return typeof key === 'string' && config[key]; }
