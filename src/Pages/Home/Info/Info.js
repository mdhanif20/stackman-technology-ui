import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    textArea:{
        textAlign:"start",
        color:"#fff"
    },
    singleInfo:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"#1CC7C1",
        justifyContent:"center",
        padding:"10px 0px",
       
        height:"100px"
    },
    midInfo:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"#3A4256",
        justifyContent:"center",
        padding:"10px 0px",
       
        height:"100px"
    },
    icon:{
        fontSize: "90px",
        color: "#fff"
    }
})

const Info = () => {
    const classes = useStyle();
    return (
        <Container sx={{mt:{xs:7,md:-8}}}>
            <Typography sx={{fontWeight: 'medium',display:{xs:"block",md:"none"}}} variant="h5" gutterBottom component="div">
                Contact Us
            </Typography>
            <Grid container >

                <Grid sx={{my:{xs:1,md:0}}} xs={12} md={4}>
                   <Box className={classes.singleInfo} sx={{ boxShadow: 3, mx:{xs:0,md:1} }}>
                        <Box sx={{pr:3}}>
                                <AccessTimeIcon className={classes.icon}/>
                            </Box>
                            <Box className={classes.textArea}>
                                <Typography sx={{fontSize:"20px"}} variant="subtitle2" gutterBottom component="div">
                                    Opening Hours
                                </Typography>
                                <Typography  variant="body2" sx={{display:{xs:"none",sm:"block"}}} gutterBottom>
                                    Lorem, ipsum dolor sit <br /> amet consectetur adip.
                                </Typography>
                                <Typography  variant="body2"  sx={{display:{xs:"block",sm:"none"}}} display="block" gutterBottom>
                                    Lorem, ipsum<br /> amet consectetur.
                                </Typography>
                            </Box>
                   </Box>
                </Grid>
            
                <Grid sx={{my:{xs:1,md:0}}} xs={12} md={4}>
                   <Box className={classes.midInfo} sx={{ boxShadow: 3, mx:{xs:0,md:1} }}>
                        <Box sx={{pr:3}}>
                                <LocationOnIcon className={classes.icon}/>
                            </Box>
                            <Box className={classes.textArea}>
                                <Typography sx={{fontSize:"20px"}} variant="subtitle2" gutterBottom component="div">
                                    Visit Our Location
                                </Typography>
                                <Typography  variant="body2" display="block" gutterBottom>
                                    Gopalganj-8100, Dhaka
                                </Typography>
                            </Box>
                   </Box>
                </Grid>
            
                <Grid sx={{my:{xs:1,md:0}}} xs={12} md={4}>
                   <Box className={classes.singleInfo} sx={{ boxShadow: 3, mx:{xs:0,md:1} }}>
                        <Box sx={{pr:3}}>
                                <PhoneInTalkIcon className={classes.icon}/>
                            </Box>
                            <Box className={classes.textArea}>
                                <Typography sx={{fontSize:"20px"}} variant="subtitle2" gutterBottom component="div">
                                    Contact Us Now
                                </Typography>
                                <Typography  variant="body2" display="block" gutterBottom>
                                   +8801609015767
                                </Typography>
                            </Box>
                   </Box>
                </Grid>
               
            </Grid>
        </Container>
    );
};

export default Info;