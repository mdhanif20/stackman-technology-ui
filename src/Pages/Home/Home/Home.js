import React from 'react';
import Navbar from '../../Sheared/Navbar/Navbar';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import BlogNews from '../BlogNews/BlogNews';
import DentalCare from '../DentalCare/DentalCare';
import FooterHome from '../FooterHome/FooterHome';
import Info from '../Info/Info';
import OurDoctors from '../OurDoctors/OurDoctors';
import PasientComment from '../PaisentComment/PasientComment';
import Service from '../Services/Service/Service';
import ContactReall from './../Contact/ContactReall';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <AppoinmentBanner></AppoinmentBanner>
            <PasientComment></PasientComment>
            <BlogNews></BlogNews>
            <OurDoctors></OurDoctors>
            <ContactReall></ContactReall>
            <FooterHome></FooterHome>
        </div>
    );
};

export default Home;