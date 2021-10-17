import express from 'express'
import { writeNewFile } from './m_fs'

export const m_router = express.Router()

/*const { getMembers, getOneMember, verifyMember, getIndTypeValues, addMember, deleteMember, updateMember, findThis, findByEmail }  =  require('./controllers/member');*/

m_router.get('/api', (req: express.Request, res: express.Response) => {
    res.send('Init page')
})

m_router.get('/write', (req: express.Request, res: express.Response) => {
    writeNewFile('new-title')
    res.send('Writing file')
})

// m_router.post('/findMember', findThis)
