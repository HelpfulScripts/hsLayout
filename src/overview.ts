/**
# hsLayout 

Helpful Scripts UI layout tools. 
<a href="./data/src/hsLayout/coverage/" target="_blank">[Coverage Info]</a>

[![npm version](https://badge.fury.io/js/hslayout.svg)](https://badge.fury.io/js/hslayout)
[![GitHub](https://img.shields.io/badge/GitHub-hsLayout-blue.svg)](https://github.com/helpfulscripts/hslayout)
[![docs](https://img.shields.io/badge/hsDocs-hsLayout-blue.svg)](https://helpfulscripts.github.io/hsLayout/#!/api/hsLayout/0)
[![Build Status](https://travis-ci.org/HelpfulScripts/hsLayout.svg?branch=master)](https://travis-ci.org/HelpfulScripts/hsLayout)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hslayout.svg)](https://david-dm.org/helpfulscripts/hslayout)
[![codecov](https://codecov.io/gh/HelpfulScripts/hsLayout/branch/master/graph/badge.svg)](https://codecov.io/gh/HelpfulScripts/hsLayout)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsLayout/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsLayout?targetFile=package.json)
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hslayout)

 * ___
 * 
 * hsLayout provides means to layout the browser window in various ways.
 * See Layout Examples below.
 * 
 * ## Concepts
 * 
 * ### Layouts
 * Layouts can be either defined generically:
 * ```
 * m(Layout, {
 *     css: '.myLayoutClass',  // optional
 *     columns: []
 *     content: ['left', 'right']
 * })
 * ```
 * Or, for more complex cases, by defining a class that extends {@link view.Layout.Layout `Layout`}:
 * ```
 * class Columns extends Layout {
 *     getComponents(node:Vnode) {
 *         return [m(LeftColumn), m(CenterColumn), m(RightColumn)]
 *     }
 * }
 * m(Columns);
 * ```
 * 
 * ### Layouters
 * To create new layout styles, define a class that extends the abstract {@link view.Layouter.Layouter `Layouter`} class.
 * This class should implement the `getStyles` method which calculates the styles attributes required for each `Component`
 * to be layed out in a `Layout`.
 * 
 * Currently defined Layouters:
 * - &nbsp; {@link view.PillaredLayouter.Columns `Columns`}
 * - &nbsp; {@link view.PillaredLayouter.Rows    `Rows`}
 * - &nbsp; {@link view.TileLayouter             `Tiles`}
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * const theContent = ['Top row: 50px', 'Bottom row: remainder']
 * m.mount(root, {view: () => m(hsLayout.Layout, {
 *     css: 'myColumn',
 *     rows: ["50px", "fill"], 
 *     content:theContent
 *     })
 * });
 * </file>
 * </example>
 * 
 * ### Nested Example
 * <example>
 * <file name='script.js'>
 * m.mount(root, {view: () => 
 *     m(hsLayout.Layout, {
 *         css: 'myColumn',
 *         rows: ["150px", "fill"], 
 *         content:[
 *             m(hsLayout.Layout, {columns:['20%'], content:['top left', 'top 2nd']}), 
 *             m(hsLayout.Layout, {columns:['20%'], content:['bottom left', 'bottom 2nd']})
 *         ]
 *     })
 * });
 * </file>
 * </example>
 */

/** */
