import express from 'express'
import { m_router } from './routes/routes'
import {msgInstruction} from './utilities/messages'

const app = express()
const port = 3000

export const dirName = __dirname
export const samplePath = 'http://localhost:3000/api/images?filename=beach&height=200&width=300'

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
