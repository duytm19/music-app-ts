import {uploadToCloudinary} from "../../helpers/uploadToCloudinary"
import { Request,Response,NextFunction } from "express"
export const uploadImage = async (req:Request,res:Response,next:NextFunction)=>{
  if(req["file"]){
    const link = await uploadToCloudinary(req["file"].buffer)
    req.body[req["file"].fieldname] = link
  }
  next()  
}
export const uploadFiles = async (req:Request,res:Response,next:NextFunction)=>{
   // console.log(req["files"])

    for(const key in req["files"]){
      req.body[key]=[]

      const array = req["files"][key]
      for(const item of array){
        try{
          const result = await uploadToCloudinary(item.buffer)
          req.body[key].push(result)
        }
        catch(error){
          console.log(error)
        }
      }
    }
    next()
}