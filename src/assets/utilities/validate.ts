// VALIDATE ALL QUERIES
// Validate photo is available
// Validate height and width are numbers
import {QueryPayload} from './../types'

const checkFormat = (url: string) =>{
  const params = new URLSearchParams(url)
  console.log({params})
  console.log(params.get('width'))
  console.log(params.get('height'))
}

export const validateQueryFormat(url: string){
  const params = new URLSearchParams(url)
  console.log({params})
  const fileName = params.get('fileName')
  const width = params.get('width')
  const height = params.get('height')

  return {
    status: 'success',
    fileName:
  }
}

export const checkIfFileExists(){

}
