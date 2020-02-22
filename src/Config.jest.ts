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

// describe('Config file', () => {
//     const root:any = document.createElement("div");
//     beforeEach((done) => {
//         m.request = async (req: any) => {
//             if (req.url === 'config.json') {
//                 const fname = `${__dirname}/example/${req.url}`;
//                 log.info(`loading ${fname}`);
//                 try {
//                     const d = await fs.readJsonFile(fname);
//                     const data = (typeof d === 'string')? JSON.parse(d) : d;
//                     log.info(`loaded ${req.url}:\n${log.inspect(data, 5)}`); 
//                     // done(); 
//                     return data;
//                 }
//                 catch(e) { log.error(e); }
//             } else {
//                 log.error(`did not find ${req.url}`);
//             }
//         };

//         log.info(`config before`);   // required to make timing for test work     
//         m.mount(root, {
//             view: () => m(Config, {source:'config.json', context:[layout]}),
//             onupdate: () => done()
//         });
//         // setTimeout(() => done(), 2000);
//     });

//     test('Config from file should match snapshot', (done) => {
//         log.info(`config test`);        
//         expect(root).toMatchSnapshot();
//         done();
//     });
// });

