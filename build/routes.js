"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_router = void 0;
var express_1 = __importDefault(require("express"));
exports.m_router = express_1.default.Router();
/*const { getMembers, getOneMember, verifyMember, getIndTypeValues, addMember, deleteMember, updateMember, findThis, findByEmail }  =  require('./controllers/member');*/
exports.m_router.get('/api', function (req, res) {
    res.send('Init page');
});
// m_router.post('/findMember', findThis)
