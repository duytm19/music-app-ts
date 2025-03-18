import { Request,Response } from "express";

import Song from "../../models/song.model";
import Topic from "../../models/topic.model";
import Singer from "../../models/singer.model";
import { systemconfig } from "../../config/config";

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

export const createPost = async (req:Request, res:Response)=>{
    const dataSong = {
        title: req.body.title,
        topicId: req.body.topicId,
        singerId: req.body.singerId,
        description: req.body.description,
        status:req.body.status,
        avatar: req.body.avatar
    }

    const song = new Song(dataSong)

    await song.save()
    res.redirect(`${systemconfig.prefixAdmin}/songs`)
}