import React from 'react';
import Login from '../../Login/Login/Login';
import Navbar from '../../Sheared/Navbar/Navbar';
import FooterHome from '../FooterHome/FooterHome';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <FooterHome></FooterHome>
        </div>
    );
};

export default Home;