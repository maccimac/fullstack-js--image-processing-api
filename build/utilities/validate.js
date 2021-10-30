"use strict";
// THIS VALIDATES QUERY AND CHECKS IF SOURCE FILE FOR IMAGE RESIZE EXISTS
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIfFileExists = exports.validateQueryFormat = void 0;
var fs_1 = __importDefault(require("fs"));
var index_1 = require("./../index");
var validateQueryFormat = function (query) {
    var width = query.width, height = query.height, filename = query.filename;
    var isNumeric = function (value) {
        if (value.length)
            return /^-?\d+$/.test(value);
        return false;
    };
    if (!width || !height || !filename) {
        var errorMsg = "missing query\n      " + (!filename ? ' -filename ' : '') + "\n      " + (!width ? ' -width ' : '') + "\n      " + (!height ? ' -height ' : '') + "\n    ";
        return {
            status: 'error',
            status_message: errorMsg
        };
    }
    else if (!isNumeric(height) || !isNumeric(width)) {
        return {
            status: 'error',
            status_message: 'passed width or height are not numbers'
        };
    }
    return {
        status: 'success'
    };
};
exports.validateQueryFormat = validateQueryFormat;
var validateIfFileExists = function (query) {
    var filename = query.filename;
    var srcImg = index_1.dirName + "/assets/full/" + filename + ".jpg";
    fs_1.default.existsSync(srcImg);
    if (fs_1.default.existsSync(srcImg)) {
        return {
            status: 'success',
            status_message: 'file available'
        };
    }
    else {
        return {
            status: 'error',
            status_message: 'file not available'
        };
    }
};
exports.validateIfFileExists = validateIfFileExists;
