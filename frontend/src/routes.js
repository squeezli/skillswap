import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./index";
import Auth from "./pages/Auth";
import Ads from "./pages/Ads";
import Chat from './pages/Chat';
import MyAds from './pages/MyAds';
import AdsMore from "./pages/AdsMore";
import { observer } from 'mobx-react-lite';

const useRoutes = () => {

    const { user } = useContext(Context)
    console.log(user)
    // if (user.isAuth) {
    //     return (
    //         <Routes>
    //             <Route path="/ads" element={<Ads />} />
    //             <Route path="/ads/:id" element={<AdsMore />} />
    //             <Route path="/chat" element={<Chat />} />
    //             <Route path="/*" element={<Navigate replace to="/ads" />} />
    //         </Routes>
    //     )
    // }


    // return (
    //     <Routes>
    //         <Route path="/login" element={<Auth />} />
    //         <Route path="/registration" element={<Auth />} />
    //         <Route path="/ads" element={<Ads />} />
    //         <Route path="/ads/:id" element={<AdsMore />} />
    //         <Route path="/*" element={<Navigate replace to="/login" />} />
    //     </Routes>
    // )
    return (
        <>
            {user.isAuth ?
                <Routes>
                    <Route path="/ads" element={<Ads />} />
                    <Route path="/ads/:id" element={<AdsMore />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/*" element={<Navigate replace to="/ads" />} />
                </Routes>
                :
                <Routes>                    
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/myAds" element={<MyAds />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/registration" element={<Auth />} />
                    <Route path="/ads" element={<Ads />} />
                    <Route path="/ads/:id" element={<AdsMore />} />
                    <Route path="/*" element={<Navigate replace to="/login" />} />
                </Routes>

            }
        </>

    );
}

export default useRoutes;