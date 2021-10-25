import express from 'express'
import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'

export const m_router = express.Router()

m_router.get('/init', (req: express.Request, res: express.Response) => {
    res.send('Init page')
})

let msgReturn: string = 'Welcome to image processing app'
let imgExists: boolean = false

let mFile: string = ''
let mWidth: string | undefined = ''
let mHeight: string | undefined = ''
let srcImg: string = ''
let targetImg: string = ''

const checkFormat = (url: string) =>{
  const params = new URLSearchParams(url)
  console.log({params})
  console.log(params.get('width'))

}

const middlewareResize = (req: express.Request, res: express.Response): void => {
    const mHost = req.get('host')

    mFile = req.params.fileName // :fileName
    mWidth = req.query.width as string
    mHeight = req.query.height as string
    srcImg = `${__dirname}/assets/full/${mFile}.jpg`
    targetImg = `${__dirname}/assets/thumb/${mFile}-${mWidth}x${mHeight}.jpg`
    // console.log(!mWidth || !mHeight)


    const fullUrl = req.get('host') + req.originalUrl
    // console.log(fullUrl)
    checkFormat(fullUrl)

      if(!mWidth || !mHeight){
        res.send(`Params width and height are required. Follow this template:
          http://localhost:3000/api/images?fileName=beach&height=200&width=300
         `)
      }else if (fs.existsSync(srcImg)) {
          sharp(srcImg)
            .resize(Number(mWidth), Number(mHeight))
            .toFile(targetImg, function(err) {
              if(err){
                console.log(err)
                res.send('Error')
              }else{
                res.sendFile(targetImg)
              }
            });
      }else{
        res.send(`${mFile} DOES NOT exist!`)
      }

}

m_router.get('/images/:fileName', middlewareResize, (req, res) =>{

  console.log({
    mFile,
    mWidth, mHeight,
    srcImg, targetImg
  })

})
