import fs from 'fs'
import { promises as fsPromises } from 'fs'

/*
    r - allows for the reading of a file
    r+ - allows for the reading and writing of a file, will overwrite content in the file
    w+ - allows for the reading and writing of a file, will create a file if it does not yet exist
    a - allows for reading and writing of a file and will append new content to the end of the file, not overwriting current content
    a+ - allows for reading and writing of a file, will create a file if it does not yet exist, and will append new content to the end of the file, not overwriting current content
*/

/*
    const writeData = async () => {
    const myFile = await fsPromises.open('myfile.txt', a+);
    await myFile.write('add text');
    }
 */

export const writeNewFile = async (title: string): Promise<void> => {
    await fsPromises.open(`./src/files/${title}.txt`, 'a+')
}
