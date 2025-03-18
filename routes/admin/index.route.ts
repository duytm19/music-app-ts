import {Express} from 'express' 
import { dashboardRoutes } from './dashboard.route'
import { systemconfig } from '../../config/config'
import { topicRoutes } from './topic.route'
const adminRoutes = (app:Express):void =>{

    const ADMIN_PATH: string = systemconfig.prefixAdmin

    app.use(ADMIN_PATH+ "/dashboard", dashboardRoutes)
  
    app.use(ADMIN_PATH + "/topics",topicRoutes)
}
export default adminRoutes
