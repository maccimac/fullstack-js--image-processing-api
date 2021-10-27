import express from 'express'
import {validateQueryFormat, validateIfFileExists} from './../utilities/validate'
import {QueryPayload} from './../types/types'

export const validationMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    const query = req.query as QueryPayload

    const formatCheck = await validateQueryFormat(query)
    if (formatCheck.status == 'error'){
      res.send('error: ' + formatCheck.status_mesage)
    }

    const fileCheck = await validateIfFileExists(query)
    if (fileCheck.status == 'error'){
      res.send('error: ' + fileCheck.status_mesage)
    }

    next()
  }
