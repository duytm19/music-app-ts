import {v2 as cloudinary} from "cloudinary"
import streamifier from "streamifier"
import dotenv from 'dotenv'
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

let streamUpload = (buffer:any) => {
  return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};
export const uploadToCloudinary = async (buffer:any)=>{
  let result = await streamUpload(buffer)
  return result["secure_url"]
}