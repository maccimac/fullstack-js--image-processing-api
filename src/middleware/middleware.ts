import express from 'express'
import {validateQueryFormat} from './../utilities/validate'
import {QueryPayload} from './../types'

export const m_middleware = (req: express.Request, res: express.Response): void => {
    console.log(req._parsedUrl)
    // const fullUrl = req.get('host') + req.originalUrl
    // console.log(validateQueryFormat(req._parsedUrl.query))

  }
