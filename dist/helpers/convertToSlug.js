"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidecode_1 = __importDefault(require("unidecode"));
const convert = (text) => {
    const unicodeText = (0, unidecode_1.default)(text.trim());
    let newStr = "";
    newStr = unicodeText.replace(/\s+/g, "-");
    return newStr;
};
exports.convert = convert;
