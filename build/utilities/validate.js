"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIfFileExists = exports.validateQueryFormat = void 0;
// VALIDATE ALL QUERIES
// Validate photo is available
// Validate height and width are numbers
var fs_1 = __importDefault(require("fs"));
var index_1 = require("./../index");
var validateQueryFormat = function (query) {
    var width = query.width, height = query.height, filename = query.filename;
    if (!width || !height || !filename) {
        return {
            status: 'error',
            status_mesage: 'missing query'
        };
    }
    console.log(query);
    var status = {
        status: 'success'
    };
    return __assign(__assign({}, status), query);
};
exports.validateQueryFormat = validateQueryFormat;
var validateIfFileExists = function (query) {
    var filename = query.filename;
    var srcImg = index_1.dirName + "/assets/full/" + filename + ".jpg";
    if (fs_1.default.existsSync(srcImg)) {
        return {
            status: 'success',
            status_mesage: 'file available'
        };
    }
    else {
        return {
            status: 'error',
            status_mesage: 'file not available'
        };
    }
};
exports.validateIfFileExists = validateIfFileExists;
