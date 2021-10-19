import express from 'express'
import { writeNewFile } from './m_fs'
import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'

export const m_router = express.Router()

m_router.get('/init', (req: express.Request, res: express.Response) => {
    res.send('Init page')
})

m_router.get('/write', (req: express.Request, res: express.Response) => {
    writeNewFile('new-title')
    res.send('Writing file')
})

m_router.get(
    '/images/:fileName',
    (req: express.Request, res: express.Response) => {
        const m_file = req.params.fileName // :fileName
        const m_width = req.query.width // ?file=fiesize
        const m_height = req.query.height // ?file=fiesize
        const srcImg = `./src/assets/full/${m_file}.jpg`
        const targetImg = `./src/assets/thumb/${m_file}-${m_width}x${m_height}.jpg`

        try {
          if(!m_width || !m_height){
            res.send(`Params width and height are required. Follow this template:
              localhost:3000/api/images/?filename=newfile&height=200&width=300
             `)
          }else if(fs.existsSync(targetImg)){
            res.sendfile(targetImg)
          }else if (fs.existsSync(srcImg) && m_width) {
              sharp(srcImg)
                .resize(Number(m_width), Number(m_height))
                .toFile(targetImg, function(err) {
                  if(err){
                    res.send(err)
                  }else{
                    res.sendfile(targetImg)
                  }
                });

          }else{
            res.send(`${m_file} DOES NOT exist!`)
          }
        } catch(err) {
          console.error(err)
          res.send(err)
        }

    }
)
