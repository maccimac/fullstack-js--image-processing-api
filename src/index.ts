// NOTE: https://expressjs.com/en/starter/hello-world.html
import express from 'express'
const app = express()
const port = 3000

import { m_router } from './routes'

app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Image Processing API</h1>
    Sample endpoint:
    'localhost:3000/api/images/?filename=newfile&height=200&width=300'
    `)
})

app.use('/api', m_router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
