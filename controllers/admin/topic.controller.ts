import { Request,Response } from "express";
import Topic from "../../models/topic.model";

// [GET] /admin/topics/index
export const index = async (req:Request, res:Response)=>{

    const topics = await Topic.find({
        deleted:false
    })
    res.render("admin/pages/topics/index",{
        pageTitle:"Music Topic",
        topics:topics
    })
}