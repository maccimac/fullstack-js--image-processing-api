"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.samplePath = exports.dirName = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes/routes");
var messages_1 = require("./utilities/messages");
var app = (0, express_1.default)();
var port = 3000;
exports.dirName = __dirname;
exports.samplePath = 'http://localhost:3000/api/images?filename=beach&height=200&width=300';
app.listen(port, function () {
    console.log(exports.dirName);
    console.log("Example app listening at http://localhost:" + port);
});
app.get('/', function (req, res) {
    res.send("\n    <h1>Welcome to Image Processing API</h1>\n    Sample endpoint:\n    <strong><code>" + exports.samplePath + "</code></strong>\n    " + messages_1.msgInstruction);
});
app.get('/api', function (req, res) {
    res.send(messages_1.msgInstruction);
});
app.use('/api', routes_1.m_router);
