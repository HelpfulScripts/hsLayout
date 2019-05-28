import { Config }   from './';
import { m }        from './mithril';
import { log, node }from 'hsnode';
import * as layout  from './';

const fs = node.fs;

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
        css: '.hs-site-footer',
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

m.request = (req: any) => {
    if (req.url === 'config.json') {
        log.info(`loading ${req.url}`);
        const fname = `${__dirname}/example/${req.url}`;
        return fs.readJsonFile(fname)
            .then((data:any) => (typeof data === 'string')? JSON.parse(data) : data)
            .then((data:any) => { log.info(`loaded ${req.url}:\n${data}`); m.redraw(); return data; })
            .catch(log.error);
    } else {
        log.error(`did not find ${req.url}`);
    }
};

describe('Config', () => {
    const root = document.createElement("div");
    beforeAll(() => {
        m.mount(root, {view: () => m(Config, {source:myConfig, context:[layout]})});
    });
    
    test('Config should match snapshot', () => {
        expect(root).toMatchSnapshot();
    });
});

describe('Config file', () => {
    const root:any = document.createElement("div");
    beforeAll((done) => {
        log.info(`config before`);   // required to make timing for test work     
        m.mount(root, {view: () => m(Config, {source:'config.json', context:[layout]})});
        setTimeout(() => { log.info(`done`); done(); }, 100);
    });

    test('Config from file should match snapshot', (done) => {
        log.info(`config test`);        
        expect(root).toMatchSnapshot();
        done();
    });
});

