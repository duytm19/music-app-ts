import {uploadToCloudinary} from "../../helpers/uploadToCloudinary"
import { Request,Response,NextFunction } from "express"
export const uploadCloud = async (req:Request,res:Response,next:NextFunction)=>{
  if(req["file"]){
    const link = await uploadToCloudinary(req["file"].buffer)
    req.body[req["file"].fieldname] = link
  }
  next()  
}