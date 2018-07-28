import * as hslayout from "../";
import { o, m } from "../mithril";

let cont: any;

const layout = (type: string, contSizes: string[]) =>
    new Promise(resolve => {
        const config = {
        css: "myRow",
        content: [`First: ${contSizes[0]}`, "Second: remainder"]
        };
        config[type] = contSizes;
        m.mount(o.root, { view: () => m(hslayout.Layout, config) });
        cont = o.root.childNodes[0];
        resolve();
    });

describe("rows px", () => {
    const contSizes = ['150px','fill'];
    beforeAll(() => layout('rows', contSizes));
    describe("snapshots", () => {
        test("rows should be defined", () => expect(cont).toBeDefined());
        test(`hs-row-layout, [${contSizes}]`, () =>
        expect(cont).toMatchSnapshot());
    });
});

describe("rows %", () => {
    const contSizes = ['30%','fill'];
    beforeAll(() => layout('rows', contSizes));
    describe("snapshots", () => {
        test("rows should be defined", () => expect(cont).toBeDefined());
        test(`hs-row-layout, [${contSizes}]`, () =>
        expect(cont).toMatchSnapshot());
    });
});

describe("columns px", () => {
    const contSizes = ['150px','fill'];
    beforeAll(() => layout('columns', contSizes));
    describe("snapshots", () => {
        test("columns should be defined", () => expect(cont).toBeDefined());
        test(`hs-column-layout, [${contSizes}]`, () =>
        expect(cont).toMatchSnapshot());
    });
});

describe("columns %", () => {
    const contSizes = ['30%','fill'];
    beforeAll(() => layout('columns', contSizes));
    describe("snapshots", () => {
        test("columns should be defined", () => expect(cont).toBeDefined());
        test(`hs-column-layout, [${contSizes}]`, () =>
            expect(cont).toMatchSnapshot());
    });
});
