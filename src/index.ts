import express from 'express'
import { m_router } from './routes/routes'
import {msgInstruction} from './utilities/messages'

export const app = express()
export const port = 3000

export const dirName = __dirname
export const samplePath = 'http://localhost:3000/api/images?filename=beach&height=600&width=800'

app.listen(port, () => {
    console.log(dirName)
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Image Processing API</h1>
    Sample endpoint:
    <strong><code>${samplePath}</code></strong>
    ` +  msgInstruction)
})



app.get('/api', (req, res) => {
    res.send(msgInstruction)
})

app.use('/api', m_router)
