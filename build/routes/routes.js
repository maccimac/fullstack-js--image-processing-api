"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_router = void 0;
var express_1 = __importDefault(require("express"));
var middleware_1 = require("./../middleware/middleware");
exports.m_router = express_1.default.Router();
exports.m_router.get('/images', middleware_1.m_middleware, function (req, res) {
    console.log('no problems');
    console.log(req.query);
    res.send('validation passed');
});
/*let imgExists: boolean = false

let mFile: string = ''
let mWidth: string | undefined = ''
let mHeight: string | undefined = ''
let srcImg: string = ''
let targetImg: string = ''*/
/*const middlewareResize = (req: express.Request, res: express.Response): void => {
    const mHost = req.get('host')

    mFile = req.query.fileName as string
    mWidth = req.query.width as string
    mHeight = req.query.height as string
    srcImg = `${dirName}/assets/full/${mFile}.jpg`
    targetImg = `${dirName}/assets/thumb/${mFile}-${mWidth}x${mHeight}.jpg`

    const fullUrl = req.get('host') + req.originalUrl
    checkFormat(fullUrl)

      if(!mWidth || !mHeight){
        res.send(`Params width and height are required. Follow this template:
          ${samplePath}
         `)
      }else if (fs.existsSync(srcImg)) {
          sharp(srcImg)
            .resize(Number(mWidth), Number(mHeight))
            .toFile(targetImg, function(err) {
              if(err){
                console.log(err)
                res.send('Error')
              }else{
                res.sendFile(targetImg)
              }
            });
      }else{
        res.send(`${mFile} DOES NOT exist!`)
      }

}*/
