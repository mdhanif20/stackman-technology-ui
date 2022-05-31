import React from 'react';
import Box from '@mui/material/Box';
import FooterHome from './../Home/FooterHome/FooterHome';
import Navbar from './../Sheared/Navbar/Navbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { makeStyles } from '@material-ui/core';
import Contact from '../Home/Contact/Contact';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ContactReall from '../Home/Contact/ContactReall';

const useStyle = makeStyles({
    iconArea:{
        margin:"150px 0px 30px 0px"
    },
    icon:{
        fontSize:"2.2rem",
        cursor:"pointer",
        margin:"10px 2px",
        padding:"0px 10px",
        border:"2px solid #fff",
        borderRadius:"35%"
    }
})
const ContactUs = () => {
    const classes = useStyle();
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