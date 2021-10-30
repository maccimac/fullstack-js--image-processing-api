import fs from 'fs'
import {dirName, samplePath, app} from '../index'
import {validateQueryFormat, validateIfFileExists} from './../utilities/validate'
import {resize} from './../utilities/resize'
import {checkTargetFile} from './../utilities/cacheFile'
const request = require('supertest')

// CONNECTION TEST
describe('Should connect to localhost:3000', () => {
  it('Should connect ok to main endpoint', () => {
    request(app)
      .get('/')
      .expect(200)
  })
  it('Should connect ok to /api endpoint', () => {
    request(app)
      .get('/api')
      .expect(200)
  })
  it('Should connect ok to /api/images endpoint', () => {
    request(app)
      .get('/api/images')
      .expect(200)
  })
})

const url = new URL(samplePath);
const queryString = url.search.substring(1)
const queryObject = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

// QUERY TEST
describe('Should have correct query and include source file', () => {

  it('Should have correct queries', async ()=>{
    const checkQuery = await validateQueryFormat(queryObject)
    expect(checkQuery.status).toEqual('success')
  })

  it('Should have available file', async ()=>{
    const checkFile = await validateIfFileExists(queryObject)
    expect(checkFile.status).toEqual('success')
  })

})

describe('Should successfully resize and save file', () => {
  console.log(queryObject)
  it('Should successfully resize file', async ()=>{
    const resizeFile = await resize(queryObject)
    expect(resizeFile.status).toEqual('success')
  })

  it('Should successfully saved file', async ()=>{
    const fileAvailable = await checkTargetFile(queryObject)
    expect(fileAvailable.status).toEqual('available')
  })


})
