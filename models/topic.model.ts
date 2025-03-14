import mongoose from "mongoose";
import { title } from "node:process";

const topicSchema = new mongoose.Schema(
    {
    title: String,
    avatar: String,
    description: String,
    status: String,
    slug: String,
    deleted:{
        type:Boolean,
        default:false,
    },
    deletedAt: Date,
    },
    {
    timestamps:true,
    }
)

const Topic = mongoose.model("Topic", topicSchema,"topics")

export default Topic