import express from 'express'

export const m_router = express.Router()

/*const { getMembers, getOneMember, verifyMember, getIndTypeValues, addMember, deleteMember, updateMember, findThis, findByEmail }  =  require('./controllers/member');*/

m_router.get('/api', (req: express.Request, res: express.Response) => {
    res.send('Init page')
})

// m_router.post('/findMember', findThis)
