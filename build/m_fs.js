"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeNewFile = void 0;
var fs_1 = __importDefault(require("fs"));
var writeNewFile = function (title) {
    fs_1.default.writeFile("path/" + title + ".txt", 'aaa', function (err) { });
};
exports.writeNewFile = writeNewFile;
