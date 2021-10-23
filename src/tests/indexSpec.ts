import fs from 'fs'
import {dirName} from '../index'

it("Should have the new file", async () => {
  const fileName = 'beach'
  const srcImg = `${dirName}/assets/full/${fileName}.jpg`
  const hasNewFile = fs.existsSync(srcImg)

  expect(hasNewFile).toEqual(true)
});
