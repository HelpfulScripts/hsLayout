import * as hslayout from "../";
import m from "mithril";

let cont: any;
const root = window.document.createElement("div");

const layout = (tileSizes: string[]) =>
    new Promise(resolve => {
        const config = {
        css: "myRow",
        content: [`First: ${tileSizes[0]}`, "Second: remainder"]
        };
        config['tiles'] = tileSizes;
        m.mount(root, { view: () => m(hslayout.Layout, config) });
        cont = root.childNodes[0];
        resolve();
    });
describe('dummy test', ()=>{
    test('layout exists', ()=>{
        expect(hslayout).toBeDefined();
    });
});

describe("tiles px", () => {
    const tileSizes = ['150px','100px'];
    beforeAll(() => layout(tileSizes));
    describe("snapshots", () => {
        test("rows should be defined", () => expect(cont).toBeDefined());
        test(`hs-row-layout, [${tileSizes}]`, () => expect(cont).toMatchSnapshot());
    });
});

describe("tiles %", () => {
    const tileSizes = ['30%','25%'];
    beforeAll(() => layout(tileSizes));
    describe("snapshots", () => {
        test("rows should be defined", () => expect(cont).toBeDefined());
        test(`hs-row-layout, [${tileSizes}]`, () => expect(cont).toMatchSnapshot());
    });
});
