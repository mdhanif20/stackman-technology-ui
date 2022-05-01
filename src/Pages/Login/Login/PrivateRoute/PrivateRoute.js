import React from 'react';
import {  Navigate, Outlet,useLocation} from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoute = () => {
    let {users, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){return <CircularProgress />}
    
    return users.email ? <Outlet/> : (
        <Navigate to="/login" replace state={{from: location}} />
    )
};

export default PrivateRoute;