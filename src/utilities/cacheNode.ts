import sharp from 'sharp'
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import {dirName} from './../index'
import {QueryPayload, Status, CacheResult} from './../types/types'

import NodeCache from 'node-cache';

const myCache = new NodeCache();

export const storeToCache = (payload: QueryPayload):void => {
  const {filename, height, width} = payload

  const cacheKey = `${filename}-${width}x${height}`

  const cacheProps = { targetImg:  `${dirName}/assets/thumb/${filename}-${width}x${height}.jpg` };
  const success = myCache.set( cacheKey, cacheProps, 10000 );
}

export const getFromCache = async (payload: QueryPayload): Promise<Status> => {
  const {filename, height, width} = payload
  const cacheKey = `${filename}-${width}x${height}`
  const cacheVal = await myCache.get( cacheKey ) as CacheResult | undefined;

  if ( cacheVal && cacheVal.targetImg){
    return {
      status: 'available',
      data: cacheVal.targetImg
    }
  }else{
    return {
      status: 'unavailable',
      status_message: 'cache is undefined'
    }
  }

}
