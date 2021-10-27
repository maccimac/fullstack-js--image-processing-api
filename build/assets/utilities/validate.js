"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfFileExists = exports.validateQueryFormat = void 0;
var checkFormat = function (url) {
    var params = new URLSearchParams(url);
    console.log({ params: params });
    console.log(params.get('width'));
    console.log(params.get('height'));
};
var validateQueryFormat = function (payload) {
    var filename = payload.filename, width = payload.width, height = payload.height;
    // const params = new URLSearchParams(url)
    // console.log({params})
    // const filename = params.get('filename')
    // const width = params.get('width')
    // const height = params.get('height')
    return {
        status: 'success',
        filename: filename,
        width: width,
        height: height
    };
};
exports.validateQueryFormat = validateQueryFormat;
var checkIfFileExists = function () {
};
exports.checkIfFileExists = checkIfFileExists;
