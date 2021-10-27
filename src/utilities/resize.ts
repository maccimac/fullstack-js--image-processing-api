import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import {dirName} from './../index'
import {QueryPayload, Status} from './../types/types'


export const resize = async (payload: QueryPayload): Promise<Status> => {
  const {filename, height, width} = payload

  const srcImg = `${dirName}/assets/full/${filename}.jpg`

  const targetImg = `${dirName}/assets/thumb/${filename}-${width}x${height}.jpg`

    return sharp(srcImg)
      .resize(Number(width), Number(height))
      .toFile(targetImg)
      .then((data) =>{
        console.log(data)
        return {
          status: 'success',
          data: targetImg
        }
      })
      .catch(err => {
        return {
          status: 'error',
          status_message: err
        }
      })

}
