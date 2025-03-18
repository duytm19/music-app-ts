import express,{Express} from "express"
import * as database from './config/database'
import dotenv from 'dotenv'
import clientRoutes from "./routes/client/index.route"
import { systemconfig } from "./config/config"
import adminRoutes from "./routes/admin/index.route"
import path from 'path' 
dotenv.config()

database.connect()

const app:Express=express()

const port: Number =3000
app.locals.prefixAdmin = systemconfig.prefixAdmin
app.use(express.static("public"))
app.set("views","./views")
app.set("view engine","pug")
// tiny MCE
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
adminRoutes(app)
clientRoutes(app)
app.listen(port,()=>{
    console.log("App listening at localhost:3000")
})