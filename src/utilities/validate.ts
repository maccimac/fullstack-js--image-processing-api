// THIS VALIDATES QUERY AND CHECKS IF SOURCE FILE FOR IMAGE RESIZE EXISTS

import fs from 'fs'
import { promises as fsPromises } from 'fs'
import {dirName} from './../index'
import {QueryPayload, Status, QueryStatus} from './../types/types'

export const validateQueryFormat = (query: QueryPayload): QueryStatus => {
  const {width, height, filename} = query
  const isNumeric = (value: string ): boolean =>  {
    if (value.length) return /^-?\d+$/.test(value);
    return false
  }

  if (!width || !height || !filename){
    return {
      status: 'error',
      status_message: 'missing query'
    }
  }else if (!isNumeric(height as string) || !isNumeric(width as string)) {
    return {
      status: 'error',
      status_message: 'passed width or height are not numbers'
    }
  }

  return {
    status: 'success'
  }

}

export const validateIfFileExists = (query: QueryPayload): Status => {
  const {filename} = query
  const srcImg = `${dirName}/assets/full/${filename}.jpg`
  fs.existsSync(srcImg)
  
  if(fs.existsSync(srcImg)){
    return {
      status: 'success',
      status_message: 'file available'
    }
  }else{
    return {
      status: 'error',
      status_message: 'file not available'
    }
  }

}
