// VALIDATE ALL QUERIES
// Validate photo is available
// Validate height and width are numbers

import {QueryPayload, Status} from './../types'

type StatusAndQuery = QueryPayload & Status

// const checkFormat = (url: string) :void => {
//   const params = new URLSearchParams(url)
//   console.log({params})
//   console.log(params.get('width'))
//   console.log(params.get('height'))
// }

export const validateQueryFormat = (url: string): StatusAndQuery => {
  const params = new URLSearchParams(url)
  console.log({params})
  const filename = '' //params.get('filename') as string
  const width = Number(params.get('width'))
  const height = Number(params.get('height'))

  return {
    status: 'success',
    filename, width, height
  }
}

// export const checkIfFileExists = () => {
// }
