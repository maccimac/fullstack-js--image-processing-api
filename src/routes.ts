import express from 'express'
import { writeNewFile } from './m_fs'
import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'

export const m_router = express.Router()

/*const { getMembers, getOneMember, verifyMember, getIndTypeValues, addMember, deleteMember, updateMember, findThis, findByEmail }  =  require('./controllers/member');*/

m_router.get('/init', (req: express.Request, res: express.Response) => {
    res.send('Init page')
})

m_router.get('/write', (req: express.Request, res: express.Response) => {
    writeNewFile('new-title')
    res.send('Writing file')
})

m_router.get(
    '/resize/:fileName',
    (req: express.Request, res: express.Response) => {
        const m_file = req.params.fileName // :fileName
        const m_width = req.query.width // ?file=fiesize
        const targetFile = `./src/assets/thumb/${m_file}-${m_width}x400.jpg`

        try {
          if(fs.existsSync(targetFile)){
            res.send(`<img src="localhost:3000/${targetFile}"/>`)
          }else if (fs.existsSync(`./src/assets/full/${m_file}.jpg`) && m_width) {
              res.send(`${m_file}.jpg exists.`)
              sharp(`./src/assets/full/${m_file}.jpg`)
                .resize(Number(m_width), 400)
                .toFile(`./src/assets/thumb/${m_file}-${m_width}x400.jpg`, function(err) {
                  // output.jpg is a 300 pixels wide and 200 pixels high image
                  // containing a scaled and cropped version of input.jpg
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
