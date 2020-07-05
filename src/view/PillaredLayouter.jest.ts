import * as hslayout from "../";
import m from "mithril";

let cont: any;
const root = window.document.createElement("div");

const layout = (type: string, contSizes: string[]) => {
        const config = {
            css: "myRow",
            content: [`First: ${contSizes[0]}`, "Second: remainder"]
        };
        config[type] = contSizes;
        m.mount(root, { view: () => m(hslayout.Layout, config) });
        cont = root.childNodes[0];
    }

describe("rows px", () => {
    const contSizes = ['150px','fill'];
    beforeAll(() => layout('rows', contSizes));
    describe("snapshots", () => {
        test("rows should be defined", () => expect(cont).toBeDefined());
        test(`hs-row-layout, [${contSizes}]`, () => expect(cont).toMatchSnapshot());
    });
});

describe("rows %", () => {
    const contSizes = ['30%','fill'];
    beforeAll(() => layout('rows', contSizes));
    describe("snapshots", () => {
        test("rows should be defined", () => expect(cont).toBeDefined());
        test(`hs-row-layout, [${contSizes}]`, () => expect(cont).toMatchSnapshot());
    });
});

describe("columns px", () => {
    const contSizes = ['150px','fill'];
    beforeAll(() => layout('columns', contSizes));
    describe("snapshots", () => {
        test("columns should be defined", () => expect(cont).toBeDefined());
        test(`hs-column-layout, [${contSizes}]`, () => expect(cont).toMatchSnapshot());
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
