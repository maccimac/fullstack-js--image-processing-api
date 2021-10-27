// VALIDATE ALL QUERIES
// Validate photo is available
// Validate height and width are numbers
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import {dirName} from './../index'
import {QueryPayload, Status, QueryStatus} from './../types/types'

export const validateQueryFormat = (query: QueryPayload): QueryStatus => {
  const {width, height, filename} = query

  if (!width || !height || !filename){
    return {
      status: 'error',
      status_mesage: 'missing query'
    }
  }
  console.log(query)


  const status = {
    status: 'success'
  }

  return {
    ...status,
    ...query
  }
}

export const validateIfFileExists = (query: QueryPayload): Status => {
  const {filename} = query
  const srcImg = `${dirName}/assets/full/${filename}.jpg`
  if(fs.existsSync(srcImg)){
    return {
      status: 'success',
      status_mesage: 'file available'
    }
  }else{
    return {
      status: 'error',
      status_mesage: 'file not available'
    }
  }

}
