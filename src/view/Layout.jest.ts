import { Layout } from "./Layout";
import { px } from "./Tokens";
import { m } from "../mithril";

let cont: any;
const root = window.document.createElement("div");

const layout = (type: string, contSizes: any[]) =>
  new Promise(resolve => {
    const config = {
      css: "myRow",
      content: [`First: ${contSizes[0]}`, "Second: remainder"],
      href: "#!my/link"
    };
    config[type] = contSizes;
    m.mount(root, { view: () => m(Layout, config) });
    cont = root;
    resolve();
  });

describe("Layout", () => {
  const contSizes = ["150px", "fill"];
  beforeAll(() => layout("rows", contSizes));

  it("should exist", () => {
    expect(Layout).toBeDefined();
  });

  it("should be clickable", () => {
    return expect(cont).toMatchInlineSnapshot(`
<div>
  <div
    class="hs-layout  myRow"
    href="#!my/link"
  >
    <div
      class="hs-layout  "
    >
      <div
        class="hs-leaf"
      >
        First: 150px
      </div>
    </div>
    <div
      class="hs-layout  "
    >
      <div
        class="hs-leaf"
      >
        Second: remainder
      </div>
    </div>
  </div>
</div>
`);
  });
});

describe("Layout without params", () => {
  const contSizes = [px(150), "fill"];
  beforeAll(() => layout("rows", contSizes));

  it("should exist", () => {
    expect(Layout).toBeDefined();
  });

  it("should be clickable", () => {
    return expect(cont).toMatchInlineSnapshot(`
<div>
  <div
    class="hs-layout  myRow"
    href="#!my/link"
  >
    <div
      class="hs-layout  "
    >
      <div
        class="hs-leaf"
      >
        First: [object Object]
      </div>
    </div>
    <div
      class="hs-layout  "
    >
      <div
        class="hs-leaf"
      >
        Second: remainder
      </div>
    </div>
  </div>
</div>
`);
  });
});
