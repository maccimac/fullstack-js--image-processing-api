"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_router = void 0;
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
exports.m_router = express_1.default.Router();
exports.m_router.get('/init', function (req, res) {
    res.send('Init page');
});
var msgReturn = 'Welcome to image processing app';
var imgExists = false;
var mFile = '';
var mWidth = '';
var mHeight = '';
var srcImg = '';
var targetImg = '';
var checkFormat = function (url) {
    var params = new URLSearchParams(url);
    console.log({ params: params });
    console.log(params.get('width'));
};
var middlewareResize = function (req, res) {
    var mHost = req.get('host');
    mFile = req.params.fileName; // :fileName
    mWidth = req.query.width;
    mHeight = req.query.height;
    srcImg = __dirname + "/assets/full/" + mFile + ".jpg";
    targetImg = __dirname + "/assets/thumb/" + mFile + "-" + mWidth + "x" + mHeight + ".jpg";
    // console.log(!mWidth || !mHeight)
    var fullUrl = req.get('host') + req.originalUrl;
    // console.log(fullUrl)
    checkFormat(fullUrl);
    if (!mWidth || !mHeight) {
        res.send("Params width and height are required. Follow this template:\n          http://localhost:3000/api/images?fileName=beach&height=200&width=300\n         ");
    }
    else if (fs_1.default.existsSync(srcImg)) {
        (0, sharp_1.default)(srcImg)
            .resize(Number(mWidth), Number(mHeight))
            .toFile(targetImg, function (err) {
            if (err) {
                console.log(err);
                res.send('Error');
            }
            else {
                res.sendFile(targetImg);
            }
        });
    }
    else {
        res.send(mFile + " DOES NOT exist!");
    }
};
exports.m_router.get('/images/:fileName', middlewareResize, function (req, res) {
    console.log({
        mFile: mFile,
        mWidth: mWidth,
        mHeight: mHeight,
        srcImg: srcImg,
        targetImg: targetImg
    });
});
