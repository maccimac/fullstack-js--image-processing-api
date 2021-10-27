import fs from 'fs'
import {dirName, samplePath, app} from '../index'
import {validateQueryFormat, validateIfFileExists} from './../utilities/validate'
const request = require('supertest')

// CONNECTION TEST
describe('Should connect to localhost:3000', () => {
  it('Should connect and have correct properties', () => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
  })
})

// QUERY TEST
describe('Should have correct query and include source file', () => {
  const url = new URL(samplePath);
  const queryString = url.search.substring(1)
  const queryObject = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

  it('Should have correct queries', async ()=>{
    const checkQuery = await validateQueryFormat(queryObject)
    expect(checkQuery.status).toEqual('success')
  })

  it('Should have available file', async ()=>{
    const checkFile = await validateIfFileExists(queryObject)
    expect(checkFile.status).toEqual('success')
  })

})
