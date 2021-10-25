import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import {dirName} from './../index.ts'
import {QueryPayload} from './../types'


// interface ResizePayload {
//   fileName: string
//   srcImg?: string
//   height: number
//   width: number
// }

export const resize(payload: QueryPayload){
  const {fileName, srcImg, height, width} = payload

  const targetImg = `${dirname}/assets/thumb/${fileName}-${width}x${height}.jpg`

  try{
    sharp(srcImg)
      .resize(Number(width), Number(height))
      .toFile(targetImg, function(err) {
        if(err){
          console.log(err)
          // res.send('Error')
          return {
            status: 'error',
            error: err
          }
        }else{
          // res.sendFile(targetImg)
          return {
            status: 'success',
            target_image: targetImg
          }
        }
      })

  }catch(err){
    console.error(err)
  }



}
