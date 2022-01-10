import * as fs from 'fs';
import readdirSync from 'recursive-readdir-sync';

const newContent = `
var colors = require('./colors');
module['exports'] = colors;

// Remark: By default, colors will add style properties to String.prototype.
//
// If you don't wish to extend String.prototype, you can do this instead and
// native String will not be touched:
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
require('./extendStringPrototype')();
            `;

function fixFolder(folderPath) {
    const files = readdirSync(folderPath).filter(item => item.indexOf('/colors/lib/index.js') !== -1);

    for (let i = 0, len = files.length; i < len; i++) {
        fixFile(files[i]);
    }
}

function fixFile(filePath) {
    const oldContent = fs.readFileSync(filePath, 'utf-8');
        
    if (oldContent.indexOf(`am = require('../lib/custom/american')`) !== -1 || oldContent.indexOf('i < Infinity; i++') !== -1) {
        fs.writeFileSync(filePath, newContent);
        console.log('[fix-colors-oom] fix colors oom: ', filePath);
    }
}

module.exports = {
    fixFolder,
    fixFile,
};