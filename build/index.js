"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirName = void 0;
// NOTE: https://expressjs.com/en/starter/hello-world.html
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1.default)();
var port = 3000;
exports.dirName = __dirname;
var msgInstruction = "\n    <p>Available images names are:\n      <ul>\n        <li>\n          beach\n          <img src=\"./assets/full/dining.jpg\"/>\n        </li>\n        <li>dining</li>\n        <li>kitchen</li>\n        <li>fitness</li>\n      </ul>\n     </p>\n";
app.get('/', function (req, res) {
    res.send("\n    <h1>Welcome to Image Processing API</h1>\n    Sample endpoint:\n    <strong><code>'http://localhost:3000/api/images/beach?height=200&width=300'</code></strong>\n    " + msgInstruction);
});
app.get('/api', function (req, res) {
    res.send(msgInstruction);
});
app.use('/api', routes_1.m_router);
app.listen(port, function () {
    console.log(exports.dirName);
    console.log("Example app listening at http://localhost:" + port);
});
app.get('/address', function (req, res) {
    /*console.log(app.address())*/
});
