<b>Deprecated</b>. Replaced by `Grid` widget in `hsWidget`.

hsLayout 
========

[![npm version](https://badge.fury.io/js/hslayout.svg)](https://badge.fury.io/js/hslayout)
[![GitHub](https://img.shields.io/badge/GitHub-hsLayout-blue.svg)](https://github.com/helpfulscripts/hslayout)
[![docs](https://img.shields.io/badge/hsDocs-hsLayout-blue.svg)](https://helpfulscripts.github.io/hsLayout/#!/api/hsLayout/0)
[![Build Status](https://travis-ci.org/HelpfulScripts/hsLayout.svg?branch=master)](https://travis-ci.org/HelpfulScripts/hsLayout)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hslayout.svg)](https://david-dm.org/helpfulscripts/hslayout)
[![codecov](https://codecov.io/gh/HelpfulScripts/hsLayout/branch/master/graph/badge.svg)](https://codecov.io/gh/HelpfulScripts/hsLayout)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsLayout/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsLayout?targetFile=package.json)
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hslayout)

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
