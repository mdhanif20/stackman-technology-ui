import React from 'react';
import Navbar from '../../Sheared/Navbar/Navbar';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Service from '../Services/Service/Service';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;