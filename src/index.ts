// NOTE: https://expressjs.com/en/starter/hello-world.html
import express from 'express'
const app = express()
const port = 3000

import { m_router } from './routes'

const msgInstruction = `
    <p>Available images names are:
      <ul>
        <li>beach</li>
        <li>dining</li>
        <li>kitchen</li>
        <li>fitness</li>
      </ul>
     </p>
`

app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Image Processing API</h1>
    Sample endpoint:
    <strong><code>'http://localhost:3000/api/images/beach?height=200&width=300'</code></strong>
    ` +  msgInstruction)
})
app.get('/api', (req, res) => {
    res.send(msgInstruction)
})

app.use('/api', m_router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})

app.get('/address', (req, res) => {
    /*console.log(app.address())*/
})
