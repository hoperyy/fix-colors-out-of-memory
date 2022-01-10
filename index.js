"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixFile = exports.fixFolder = void 0;
const fs = __importStar(require("fs"));
const recursive_readdir_sync_1 = __importDefault(require("recursive-readdir-sync"));
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
    const files = (0, recursive_readdir_sync_1.default)(folderPath).filter(item => item.indexOf('/colors/lib/index.js') !== -1);
    for (let i = 0, len = files.length; i < len; i++) {
        fixFile(files[i]);
    }
}
exports.fixFolder = fixFolder;
function fixFile(filePath) {
    if (fs.existsSync(filePath)) {
        const oldContent = fs.readFileSync(filePath, 'utf-8');
        if (oldContent.indexOf(`am = require('../lib/custom/american')`) !== -1 || oldContent.indexOf('i < Infinity; i++') !== -1) {
            fs.writeFileSync(filePath, newContent);
            console.log('[fix-colors-oom] fix colors oom: ', filePath);
        }
    }
}
exports.fixFile = fixFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBQ3pCLG9GQUFpRDtBQUVqRCxNQUFNLFVBQVUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Q0FjbEIsQ0FBQztBQUVGLFNBQVMsU0FBUyxDQUFDLFVBQVU7SUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBQSxnQ0FBVyxFQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCO0FBQ0wsQ0FBQztBQWFRLDhCQUFTO0FBWGxCLFNBQVMsT0FBTyxDQUFDLFFBQVE7SUFDckIsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3pCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRELElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2SCxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO0tBQ0o7QUFDTCxDQUFDO0FBRW1CLDBCQUFPIn0=