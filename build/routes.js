"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_router = void 0;
var express_1 = __importDefault(require("express"));
var m_fs_1 = require("./m_fs");
exports.m_router = express_1.default.Router();
/*const { getMembers, getOneMember, verifyMember, getIndTypeValues, addMember, deleteMember, updateMember, findThis, findByEmail }  =  require('./controllers/member');*/
exports.m_router.get('/api', function (req, res) {
    res.send('Init page');
});
exports.m_router.get('/write', function (req, res) {
    (0, m_fs_1.writeNewFile)('new title');
});
// m_router.post('/findMember', findThis)