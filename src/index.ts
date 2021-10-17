// NOTE: https://expressjs.com/en/starter/hello-world.html
import express from 'express'
const app = express()
const port = 3000

import { m_router } from './routes'

/*app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Image Processing API</h1>
    Sample endpoint:
    <strong><code>'localhost:3000/api/images/?filename=newfile&height=200&width=300'</code></strong>
    `)
})
app.get('/api', (req, res) => {
    res.send(`
    This is an image resizing app
    `)
})*/

app.use('/', m_router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})

app.get('/address', (req, res) => {
    /*console.log(app.address())*/
})
