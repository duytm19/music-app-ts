import {Express} from 'express' 
import { dashboardRoutes } from './dashboard.route'
import { systemconfig } from '../../config/config'
import { topicRoutes } from './topic.route'
import { songRoutes } from './song.route'
const adminRoutes = (app:Express):void =>{

    const ADMIN_PATH: string = systemconfig.prefixAdmin

    app.use(ADMIN_PATH+ "/dashboard", dashboardRoutes)
  
    app.use(ADMIN_PATH + "/topics",topicRoutes)

    app.use(ADMIN_PATH + "/songs",songRoutes)

}
export default adminRoutes
