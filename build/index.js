"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE: https://expressjs.com/en/starter/hello-world.html
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
var routes_1 = require("./routes");
app.get('/', function (req, res) {
    res.send("\n    <h1>Welcome to Image Processing API</h1>\n    Sample endpoint:\n    <strong><code>'localhost:3000/api/images/?filename=newfile&height=200&width=300'</code></strong>\n    ");
});
app.get('/api', function (req, res) {
    res.send("\n    This is an image resizing app\n    ");
});
app.use('/api', routes_1.m_router);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
