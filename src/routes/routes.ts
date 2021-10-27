import express from 'express'
import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import {dirName, samplePath} from './../index'
import {validateQueryFormat} from './../utilities/validate'
import {resize} from './../utilities/resize'
import {checkCache} from './../utilities/cache'
import {validationMiddleware} from './../middleware/middleware'


export const m_router = express.Router()


m_router.get('/images', validationMiddleware, async (req: express.Request, res: express.Response) => {

  const isCached = await checkCache(req.query)

  const initResize = async () =>{
    const resizeFile = await resize(req.query)
    if (resizeFile.status=='success'){
      res.sendFile(resizeFile.data as string)
    }else{
      res.send(resizeFile.status_message)
    }
  }



  if(isCached.status == 'available'){
    res.sendFile(isCached.data as string)
  }else if (isCached.status == 'unavailable'){
    initResize()
  }


})

/*let imgExists: boolean = false

let mFile: string = ''
let mWidth: string | undefined = ''
let mHeight: string | undefined = ''
let srcImg: string = ''
let targetImg: string = ''*/

/*const middlewareResize = (req: express.Request, res: express.Response): void => {
    const mHost = req.get('host')

    mFile = req.query.fileName as string
    mWidth = req.query.width as string
    mHeight = req.query.height as string
    srcImg = `${dirName}/assets/full/${mFile}.jpg`
    targetImg = `${dirName}/assets/thumb/${mFile}-${mWidth}x${mHeight}.jpg`

    const fullUrl = req.get('host') + req.originalUrl
    checkFormat(fullUrl)

      if(!mWidth || !mHeight){
        res.send(`Params width and height are required. Follow this template:
          ${samplePath}
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

}*/
