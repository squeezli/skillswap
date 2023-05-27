import Auth from "./pages/Auth";
import Ads from "./pages/Ads";
import {ADS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     element: <Admin/>
    // },

]

export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },    
    {
        path: ADS_ROUTE,
        element: <Ads/>
    },    

]