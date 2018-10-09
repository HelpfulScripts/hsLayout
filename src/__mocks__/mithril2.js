// __mocks__/fs.js
'use strict';

jest.disableAutomock();
jest.unmock('../mithril');

const m = require('../mithril');
// const m = jest.genMockFromModule('mithril');

// m.request = () => {
//     return `{
//         "Layout": {
//             "rows": ["40px", "fill"], 
//             "content": ["row 1", "row 2"]
//         }
//     }`
// };

module.exports = m;