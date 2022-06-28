import React from 'react';
import Box from '@mui/material/Box';
import FooterHome from './../Home/FooterHome/FooterHome';
import Navbar from './../Sheared/Navbar/Navbar';
import ContactReall from '../Home/Contact/ContactReall';

const ContactUs = () => {
    return (
        <Box>
            <Box sx={{bgcolor:"#0f0c0b"}}>
                <Navbar></Navbar>
            </Box>
           <Box>
        
           <Box sx={{mt:{xs:5,sm:10},mx:{xs:2,sm:2,md:5}}}>
            <ContactReall></ContactReall>
           </Box>
           
        
           </Box>
            <Box sx={{bgcolor:"#0f0c0b",boxShadow: "1px 12px 12px 14px #b4acac",color:"#fff"}}>
                <FooterHome></FooterHome>
            </Box>
        </Box>
    );
};

export default ContactUs;