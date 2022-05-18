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
        
           <Container sx={{textAlign:"start",py:5,display:"flex"}}>
           <Grid container>
                <Grid item sx={{background:"#0F0C0B"}} xs={12} sm={4} md={3}>
                        <Box sx={{ color:'#fff',background:"#0F0C0B",padding:"30px"}}>
                            <Typography sx={{fontSize:"1.5rem"}} variant="button" gutterBottom>
                                Location
                            </Typography>
                            <Typography sx={{fontSize:"1.2rem"}} variant="body1" gutterBottom>
                                House-32, Kanchannagar, <br />
                                Chandanish, Chittagong.
                            </Typography>
                            <Box sx={{mt:{xs:3,sm:5,md:15},mb:2}}>
                                <span className={classes.icon}><FacebookIcon/></span>
                                <span className={classes.icon}><EmailIcon/></span>
                                <span className={classes.icon}><TwitterIcon/></span>
                                <span className={classes.icon}><LinkedInIcon/></span>
                            </Box>
                            <Typography sx={{fontSize:"1.2rem",marginBottom:"20px"}} variant="body1" gutterBottom>
                                Phone: <br />
                                +8801821876351 <br />
                                +8801609015767 <br />
                                mdhanif2921@gmail.com
                            </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                <Box>
                    <Box sx={{marginTop:"-90px"}}>
                        <Contact></Contact>
                    </Box>
                </Box>
                </Grid>
                
            </Grid>
          
            
           </Container>
           
        
           </Box>
            <Box sx={{bgcolor:"#0f0c0b",boxShadow: "1px 12px 12px 14px #b4acac",color:"#fff"}}>
                <FooterHome></FooterHome>
            </Box>
        </Box>
    );
};

export default ContactUs;