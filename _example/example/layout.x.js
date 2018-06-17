import { m } from '../mithril';
import { Layout, HsConfig } from '../';
const myConfig = {
    Layout: {
        rows: ['40px', 'fill'],
        content: [
            { Header: { css: '.header', title: 'Layout Example' } },
            { Main: {
                    tiles: [''],
                    maxCount: 6,
                    leafCSS: 'leaf',
                    content: [
                        { Layout: {
                                rows: [''],
                                content: [
                                    { aLeaf: { css: 'leaf', columns: [' '] } },
                                    { aLeaf: { css: 'leaf', columns: ['100px'] } },
                                    { aLeaf: { css: 'leaf', columns: ['100px', '200px'] } },
                                    { aLeaf: { css: 'leaf', columns: ['100px', 'fill'] } },
                                    { aLeaf: { css: 'leaf', columns: ['100px', 'fill', '100px'] } },
                                    { aLeaf: { css: 'leaf', columns: ['20%'] } },
                                    { aLeaf: { css: 'leaf', columns: ['20%', 'fill'] } },
                                    { aLeaf: { css: 'leaf', columns: ['20%', 'fill', '20%'] } }
                                ]
                            } },
                        { Layout: {
                                columns: [''],
                                content: [
                                    { aLeaf: { css: 'leaf', rows: [' '] } },
                                    { aLeaf: { css: 'leaf', rows: ['100px'] } },
                                    { aLeaf: { css: 'leaf', rows: ['100px', '200px'] } },
                                    { aLeaf: { css: 'leaf', rows: ['100px', 'fill'] } },
                                    { aLeaf: { css: 'leaf', rows: ['100px', 'fill', '100px'] } },
                                    { aLeaf: { css: 'leaf', rows: ['20%'] } },
                                    { aLeaf: { css: 'leaf', rows: ['20%', 'fill'] } },
                                    { aLeaf: { css: 'leaf', rows: ['20%', 'fill', '20%'] } }
                                ]
                            } },
                        { Layout: {
                                tiles: [''],
                                css: 'tile_pct',
                                content: [
                                    { aLeaf: { css: 'leaf', tiles: [' '] } },
                                    { aLeaf: { css: 'leaf', tiles: ['40%', 'fill'] } },
                                    { aLeaf: { css: 'leaf', tiles: ['40%'] } },
                                    { aLeaf: { css: 'leaf', tiles: ['40%', '30%', 'fill'] } },
                                ]
                            } },
                        { Layout: {
                                tiles: [''],
                                css: 'tile_px',
                                content: [
                                    { aLeaf: { css: 'leaf', tiles: [' '] } },
                                    { aLeaf: { css: 'leaf', tiles: [' ', 'fill'] } },
                                    { aLeaf: { css: 'leaf', tiles: [' '] } },
                                    { aLeaf: { css: 'leaf', tiles: [' '] } },
                                ]
                            } }
                    ]
                } }
        ]
    }
};
function next(fn) {
    return setTimeout(() => {
        fn();
        next(fn);
    }, 2000);
}
const example = {
    maxCount: 0,
    Header: class extends Layout {
        getComponents(node) {
            return m(node.attrs.css, node.attrs.title);
        }
    },
    Main: class extends Layout {
        getComponents(node) {
            example.maxCount = node.attrs.maxCount || 3;
            return super.getComponents(node);
        }
    },
    aLeaf: class extends Layout {
        constructor() {
            super();
            this.count = 1;
            this.inc = 1;
            next(() => {
                this.count += this.inc;
                if (this.count >= example.maxCount) {
                    this.inc = -1;
                }
                if (this.count <= 1) {
                    this.inc = +1;
                }
                m.redraw();
            });
        }
        getComponents(node) {
            const dims = node.attrs.columns || node.attrs.rows || node.attrs.tiles;
            let text = '';
            if (node.attrs.columns) {
                text = 'Columns';
            }
            if (node.attrs.rows) {
                text = 'Rows';
            }
            if (node.attrs.tiles) {
                text = 'Tiles';
            }
            const content = [...Array(this.count).keys()].map((c) => `${text}<br>${c + 1}<br>[${dims.join()}]`);
            return content;
        }
    }
};
export const cfg = new HsConfig([example]).attachNodeTree(myConfig, document.body);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZS9sYXlvdXQueC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQUUsQ0FBQyxFQUFTLE1BQWtCLFlBQVksQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFPLEtBQUssQ0FBQztBQUd4QyxNQUFNLFFBQVEsR0FBRztJQUNiLE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDdEIsT0FBTyxFQUFFO1lBQ0wsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBQyxFQUFDO1lBQ3BELEVBQUUsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRyxDQUFDLEVBQUUsQ0FBQztvQkFDWixRQUFRLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUU7d0JBQ0wsRUFBRSxNQUFNLEVBQUU7Z0NBQ04sSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRTtvQ0FDTCxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQztvQ0FDdkMsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUM7b0NBQzVDLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBQztvQ0FDckQsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFDO29D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