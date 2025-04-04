import { Router } from "express";
import multer from "multer"
const router:Router = Router();
import * as uploadCloud from "../../middlewares/admin/uploadCloud.middleware"
import * as controller from "../../controllers/admin/song.controller"
const upload = multer()

router.get("/", controller.index);

router.get("/create", controller.create);
router.post("/create",
    upload.fields([
        {name:"avatar",maxCount:1},
        {name:"audio",maxCount:1}
    ]),
    uploadCloud.uploadFiles,
    controller.createPost);

router.get("/edit/:idSong", controller.edit);

router.patch("/edit/:idSong", 
    upload.fields([
        {name:"avatar",maxCount:1},
        {name:"audio",maxCount:1}
    ]),
    uploadCloud.uploadFiles,
    controller.editPatch);

export const  songRoutes:Router=router;
