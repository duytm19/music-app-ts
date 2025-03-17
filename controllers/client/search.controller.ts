import { Request,Response } from "express"
import FavoriteSong from "../../models/favorite-song.model"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"
import { convert } from "../../helpers/convertToSlug"

//[GET] /search/result
export const result = async (req:Request,res:Response)=>{
    const keyword: string  = `${req.query.keyword}`

    
    let newSongs = []
    
    if(keyword){
        const keywordRegex = new RegExp(keyword,"i")
        //Convert to Slug

        const stringSlug =convert(keyword)
        const stringSlugRegex = new RegExp(stringSlug,"i")
        
        const songs = await Song.find({
            $or:[
                {title: keywordRegex},
                {slug:stringSlugRegex}
            ]
        })

        for(const item of songs){
            const infoSinger =await Singer.findOne({
                _id:item.singerId
            })

            item["infoSinger"]=infoSinger
        }
        newSongs = songs        
    }
    res.render("client/pages/search/result",{
        pageTitle:  `Result: ${keyword}`,
        keyword:keyword,
        songs:newSongs
    })
}