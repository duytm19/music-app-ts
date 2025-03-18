import {Express} from 'express' 
import { dashboardRoutes } from './dashboard.route'
import { systemconfig } from '../../config/config'
const adminRoutes = (app:Express):void =>{

    const ADMIN_PATH: string = systemconfig.prefixAdmin

    app.use(ADMIN_PATH+ "/dashboard", dashboardRoutes)
  
}
export default adminRoutes
