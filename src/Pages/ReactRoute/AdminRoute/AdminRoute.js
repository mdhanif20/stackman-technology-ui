import React from 'react';
import {  Navigate, Outlet,useLocation} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from './../../Hooks/useAuth';


const AdminRoute = () => {
    let {users, admin, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){return <CircularProgress />}
    return users.email && admin ? <Outlet/> : <Navigate replace state={{from: location}} to="/"/>
    
};

export default AdminRoute;