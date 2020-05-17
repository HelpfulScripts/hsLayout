import { Config }   from './';
import * as layout  from './';
import { m }        from './mithril';

// const fs = node.fs;

const myConfig = {
    root: { Layout: {
        css: '.my-example',
        rows:    ['30px', 'fill', '10px'],
        content: ['Header', 'Body', 'Footer']
    }},
    Header: { Layout:{
        columns: ['200px', 'fill'],
        content: ['LeftHead', 'MainHead']
    }},
    Body: { Layout:{
        columns: ['200px', 'fill'], 
        content: ['LeftNav', 'MainNav']
    }},
    Footer: { Layout: {
        css: '.hs_footer',
        content: ['(c) Helpful ; Scripts']
    }},
    LeftHead: "left head",
    MainHead: "main head",
    LeftNav:  "left nav",
    MainNav:  "main nav"
};


// Polyfill DOM env for mithril
window = require("mithril/test-utils/browserMock.js")();
document = window.document;


describe('Config', () => {
    const root = document.createElement("div");
    beforeAll(() => {
        m.mount(root, {view: () => m(Config, {source:myConfig, context:[layout]})});
    });
    
    test('Config should match snapshot', () => {
        expect(root).toMatchSnapshot();
    });
});

