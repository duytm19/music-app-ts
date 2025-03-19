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
    let avatar:string =""
    let audio:string =""
    if(req.body.avatar){
        avatar=req.body.avatar[0]
    }
    if(req.body.audio){
        audio = req.body.audio[0]
    }
    const dataSong = {
        title: req.body.title,
        topicId: req.body.topicId,
        singerId: req.body.singerId,
        description: req.body.description,
        status:req.body.status,
        avatar: avatar,
        audio:audio,
        lyrics: req.body.lyrics
    }

    const song = new Song(dataSong)

    await song.save()
    res.redirect(`${systemconfig.prefixAdmin}/songs`)
}
// [GET] /songs/edit/:idSong
export const edit = async (req:Request, res:Response)=>{
    const idSong = req.params.idSong

    const song =await Song.findOne({
        _id:idSong
    })
    const topics = await Topic.find({
        deleted:false
    })
    const singers = await Singer.find({
        deleted:false
    })
    res.render("admin/pages/songs/edit",{
        pageTitle:"Music ",
        topics:topics,
        singers:singers,
        song:song
    })
}

// [PATCH] /admin/songs/edit/:idSong
export const editPatch = async (req:Request, res:Response)=>{
    
    const id = req.params.idSong
    //console.log(req.body.lyrics)
    const dataSong = {
        title: req.body.title,
        topicId: req.body.topicId,
        singerId: req.body.singerId,
        description: req.body.description,
        status:req.body.status,
        lyrics: req.body.lyrics
    }
    if(req.body.avatar){
        dataSong["avatar"]=req.body.avatar[0]
    }
    if(req.body.audio){
        dataSong["audio"] = req.body.audio[0]
    }
    await Song.updateOne({
        _id:id
    },
        dataSong
    )

    
    res.redirect(`${systemconfig.prefixAdmin}/songs`)
}