hsLayout 
========
[![npm version](https://badge.fury.io/js/hslayout.svg)](https://badge.fury.io/js/hslayout) 
[![Build Status](https://travis-ci.org/HelpfulScripts/hsLayout.svg?branch=master)](https://travis-ci.org/HelpfulScripts/hsLayout)
[![Coverage Status](https://coveralls.io/repos/github/HelpfulScripts/hsLayout/badge.svg?branch=master)](https://coveralls.io/github/HelpfulScripts/hsLayout?branch=master)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/) 
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hslayout)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsLayout/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsLayout?targetFile=package.json)

Helpful Scripts framework-independent data management functions.

**hsLayout** provides means to layout the browser window in various ways.<br>
It uses the [mithril](https://www.npmjs.com/package/mithril) framework to create the layout.

## Installation
`npm i hslayout`

## Usage
The following snippet creates a layout that fills the provided *root* element with three rows. The first and third rows have a fixed size, while the middle row fills the remaining space. 
```

import { m, Layout } from 'hslayout';

m.mount(root, {view: () => m(Layout, {
    rows: ["50px", "fill", "20px"],
    content:['Top row: 50px', 'Middle row: fill', 'Fixed footer']
    })
});
```