import { Request,Response } from "express";

import Song from "../../models/song.model";
import Topic from "../../models/topic.model";
import Singer from "../../models/singer.model";

// [GET] /admin/songs/index
export const index = async (req:Request, res:Response)=>{

    const songs = await Song.find({
        deleted:false
    })
    res.render("admin/pages/songs/index",{
        pageTitle:"Music ",
        songs:songs
    })
}

// [GET] /admin/songs/create
export const create = async (req:Request, res:Response)=>{

    const topics = await Topic.find({
        deleted:false
    })
    const singers = await Singer.find({
        deleted:false
    })
    res.render("admin/pages/songs/create",{
        pageTitle:"Music ",
        topics:topics,
        singers:singers
    })
}