import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import {dirName} from './../index'
import {QueryPayload, Status} from './../types/types'


export const checkTargetFile = async (payload: QueryPayload): Promise<Status> => {
  const {filename, height, width} = payload

  const targetImg = `${dirName}/assets/thumb/${filename}-${width}x${height}.jpg`

  if(fs.existsSync(targetImg)){
    return {
      status: 'available',
      data: targetImg
    }
  }else{
    return {
      status: 'unavailable',
      status_message: 'file not available'
    }
  }
}
