import { Router } from "express";
const router:Router = Router();
import multer from "multer"
const upload = multer()
import * as controller from "../../controllers/admin/upload.controller"
import * as uploadCloud from "../../middlewares/admin/uploadCloud.middleware"
router.post("/", 
    upload.single("file"),
    uploadCloud.uploadImage,
    controller.index);

export const  uploadRoutes:Router=router;
