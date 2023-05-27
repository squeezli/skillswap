import Auth from "./pages/Auth"
import {LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

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

]