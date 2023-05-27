import React, { useContext } from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { ADS_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';
const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} />
            )}
            <Route
                path="*"
                element={<Navigate to={ADS_ROUTE} replace />}
            />
        </Routes>
    )
}

export default AppRouter;