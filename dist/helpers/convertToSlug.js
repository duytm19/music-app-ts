"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const convert = (text) => {
    let newStr = "";
    newStr = text.trim().replace(/\s+/g, "-");
    return newStr;
};
exports.convert = convert;
