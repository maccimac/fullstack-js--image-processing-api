"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var validate_1 = require("./../utilities/validate");
var resize_1 = require("./../utilities/resize");
var cacheFile_1 = require("./../utilities/cacheFile");
var request = require('supertest');
// CONNECTION TEST
describe('Should connect to localhost:3000', function () {
    it('Should connect ok to main endpoint', function () {
        request(index_1.app)
            .get('/')
            .expect(200);
    });
    it('Should connect ok to /api endpoint', function () {
        request(index_1.app)
            .get('/api')
            .expect(200);
    });
    it('Should connect ok to /api/images endpoint', function () {
        request(index_1.app)
            .get('/api/images')
            .expect(200);
    });
});
var url = new URL(index_1.samplePath);
var queryString = url.search.substring(1);
var queryObject = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
// QUERY TEST
describe('Should have correct query and include source file', function () {
    it('Should have correct queries', function () { return __awaiter(void 0, void 0, void 0, function () {
        var checkQuery;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, validate_1.validateQueryFormat)(queryObject)];
                case 1:
                    checkQuery = _a.sent();
                    expect(checkQuery.status).toEqual('success');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should have available file', function () { return __awaiter(void 0, void 0, void 0, function () {
        var checkFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, validate_1.validateIfFileExists)(queryObject)];
                case 1:
                    checkFile = _a.sent();
                    expect(checkFile.status).toEqual('success');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Should successfully resize and save file', function () {
    console.log(queryObject);
    it('Should successfully resize file', function () { return __awaiter(void 0, void 0, void 0, function () {
        var resizeFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, resize_1.resize)(queryObject)];
                case 1:
                    resizeFile = _a.sent();
                    expect(resizeFile.status).toEqual('success');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should successfully saved file', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fileAvailable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, cacheFile_1.checkTargetFile)(queryObject)];
                case 1:
                    fileAvailable = _a.sent();
                    expect(fileAvailable.status).toEqual('available');
                    return [2 /*return*/];
            }
        });
    }); });
});
