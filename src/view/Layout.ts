/**
 * # Layout
 * A `mithril` component class that layouts available space in the window.
 * 
 * ### Invocation
 * invoked as `m(Layout, {<layout style>:[<string>], content:Array<Vnode>})`. See example below.
 * 
 * ### Attributes (node.attrs):
 * - `<layout-style>`: [...]: a required keyword indicating the {@link view.Layouter Layouter} to use, followed by a configuration array. 
 *    E.g. `rows: ["30px", "fill"]`.
 * - `content`: Array<Vnode>, required. The Vnode children to lay out. 
 *     - `string` literal, e.g. "the content"
 *     - `[ ]` array of elements:
 *         - `string` literal, e.g. "the content"
 *         - `{ }` literal
 *            - `compClass`: a {@link view.Layout.Component Component} class definition, e.g. `Layout`
 * - `css`: optional String. The css specifier to use for this `Layout` component.
 * - `route`: optional object literal holding parameters passed from `m.route`
 * - `href`: optional String. If present, makes the component clickable
 * - `target`: optional string, determines where `href` is opened. Defaults to '_blank' to open `href` in a new tab.
 * - `onclick`:(), optional. The function to call when clicked
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * m.mount(root, {view: () => m(hsLayout.Layout, {
 *     css:     'myColumn',
 *     rows:    ["50px", "fill"], 
 *     content: ['Top row: 50px', 'Bottom row: remainder']
 *     })
 * });
 * </file>
 * </example>

 */

/** */
import { m, Vnode } from '../mithril'; 
import { Layouter } from './Layouter'; 
import { log as _log }  from 'hsutil'; const log = _log('Layout');

/**
 * Component interface. 
 * Formalizes the `mithril` requirement for a `view` method.
 */
export interface Component {
    view(node:Vnode): Vnode;
}

/**
Base class for applying layouts. Subclasses should implement a {@link view.Layout.Layout.getComponents `getComponents`} method that returns
the components to render. The default implementation returns the conponents passed in `node.attrs.content`.
Optionally, the subclass can also implement {@link view.Layout.Layout.getCSS `getCSS`} to provide the CSS class to 
assign to the component, and override the default implementation, which returns `node.attrs.css`. 
### Example:
<code>
import { Layout, px, FILL }  from 'hslayout';
const TitleHeight   = px(30); 
const FooterHeight  = px(10); 
class MyLayout extends Layout {
    getComponents(node:Vnode):Vnode {
        return this.layout('.my-layout', { rows:[TitleHeight, FILL, FooterHeight] }, [
            m(), 
            m(),
            m()
        ]);
    }
    getCSS(node:Vnode):string {
    }
} 
</code>
 */
export class Layout implements Component {
    /**
     * holds structural elements in style form: left, right, top, bottom, width, height
     */
    public style:string;

//    oninit(node:Vnode)   { this.report('Layout:init', node); }
//    oncreate(node:Vnode) { this.report('Layout:create', node); } 
//    onupdate(node:Vnode) { this.report('Layout:update', node); }

    /**
     * Called during the lifecycle `view` call to retrieve the subcomponents to render in this container.
     * The default implementation returns components stored in `node.attrs.content`. This allows for 
     * creating containers directly via mithril: `m(Layout, {content:[...]})`. 
     * In case `node.attrs.content` is an array of literals with a `compClass` field describing a Component class, 
     * the method will create a Mithril node on that class and pass the `node.attrs.route` argument down to it.
     * 
     * Override this method to create containers that return more sophisticated content.
     * @return a String, a Vnode, or an array of Strings or Vnodes
     */
    protected getComponents(node:Vnode):Vnode {
        return !Array.isArray(node.attrs.content)? node.attrs.content :
            node.attrs.content.map((c:any) => {
                if (c.compClass) { 
                    c.attrs.route = node.attrs.route;
                    return m(c.compClass, c.attrs);
                } else {
                    return c;
                }
            });
    }

    /**
     * Called during the lifecycle `view` call to retrieve the css style class to apply to this container.
     * The default implementation returns components stored in `node.attrs.css`. This allows for 
     * creating containers directly via mithril: `m(Layout, {content:[...], css:'.my-class'})`.
     * Override this method to create containers that return more sophisticated content.
     */
    protected getCSS(node:Vnode):string {
        return node.attrs.css || '';
    }

    /**
     * ensures that all `components` are `mithril` nodes and returns them in an array.
     * @param components either of:
     * - a `string` literal --> interprets the string as trusted HTML and returns a leaf node.
     * - an array of elements, each either a `Layout`, or `string` literal which will be converted to a `Layout`.
     */
    private normalizeContent(components:Array<typeof Layout|string>|string): Vnode {
        if (typeof components === 'string') { 
            return [m('.hs-leaf', m.trust(components))]; 
        }
        if (components.length>0) { // an array: ensure elements are Layout components
            return components.map((comp:string|typeof Layout):Vnode => 
                    (comp instanceof Layout)? comp : m(Layout, {content:comp})
            );
        }
        // else: assume components is a mithril node: return node as an array
        return [components];
    }

    /**
    lays out the component in `components` according to the configuration in `attrs`.
    The method returns a vnode container that has an associated `cssClass` style.
    `layout` is called during the `render` phase of the `mithril` lifecycle, 
    which ensures an outside-in calling sequence on containers; 
    i.e. the outermost containers are called first, and `node` will already have the 
    `style` field set with required style attributes. 
    These are added to any `attrs` parameter provided.

    The format for the layout configuration in `attrs` is <code>
    {<keyword>: <parameter>}
    </code>
     where `keyword` is the keyword with which the `Layouter` was registered.
     * @param cssClass a css style designator; same as used in m(cssClass, ...) 
     * @param layout the attribute object literal that configures the layout
     * @param components the components to layout within the container. 
     * This is either a primitive `string`, or an array of `Layout`s or `string`s.
     * @return a vnode that has an associated `cssClass` style.
     */
    view(node:Vnode): Vnode {
        const content = this.normalizeContent(this.getComponents(node)); // --> Vnode[]
        let css = Layouter.createLayout(node.attrs, content);
        const attrs:any = {
            style: node.style,
            route: node.attrs.route,     
            onclick: node.attrs.onclick
        };
        node.attrs.route = undefined;
        if (node.attrs.href) { 
            log.info(`href ${node.attrs.href}`);
            attrs.href = node.attrs.href;
            attrs.target = attrs.target || '_blank';
            attrs.oncreate = m.route.link;
            attrs.onupdate = m.route.link;
            // attrs.onclick = () => window.open(node.attrs.href, '_blank');
            return m(`a.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c:any) => c));
        } else {
            return m(`.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c:any) => c));
        }
    }
}
