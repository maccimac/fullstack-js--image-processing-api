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
