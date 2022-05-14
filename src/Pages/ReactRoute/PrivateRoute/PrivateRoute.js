import React from 'react';
import {  Navigate, Outlet,useLocation} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from './../../Hooks/useAuth';

const PrivateRoute = () => {
    let {users, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){return <CircularProgress />}
    
    return users.email ? <Outlet/> : (
        <Navigate to="/login" replace state={{from: location}} />
    )
};

export default PrivateRoute;