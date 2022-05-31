import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import bg from "../../../images/bannerBg.jpg";
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor1.png";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    bannerBackground:{
        background:`url(${bg})`,
        backgroundColor: "rgba(61, 61, 61, 0.8)",
        backgroundBlendMode: "darken, luminosity",
        margin:"130px 0px"
    },
    bannerImage:{
        width: "100%",
        height: "100%",
        marginTop: "-270px",
        marginBottom: "-5px"
    },
    button:{
        margin:"20px 0px",
        backgroundColor:"#3bc5c5",
        '&:hover':{
            backgroundColor:"#3bc5c5"
        }
    }
})

const AppoinmentBanner = () => {
    const classes = useStyle();
    return (
        <Box className={classes.bannerBackground}>
            <Grid container spacing={2}>
                <Grid sx={{height:"100%"}} xs={12} sm={6} md={4}>
                    <img className={classes.bannerImage} src={doctor} alt="" />
                </Grid>
                <Grid sx={{textAlign:"start",px:5}} xs={12} sm={6} md={8}>
                    <Typography  sx={{color:"#84ffff", fontSize:"16px",pt:5, my: 1}} variant="button" display="block" gutterBottom>
                        Appoinment
                    </Typography>
                    <Typography variant="h4" sx={{color:"#fff", my:2, display:{xs:"none",md:"block"}}} gutterBottom component="div">
                        Make An Appoinment <br /> Today
                    </Typography>
                    <Typography variant="h4" sx={{color:"#fff", my:2,  display:{xs:"block",md:"none"}}} gutterBottom component="div">
                        Make An Appoinment Today
                    </Typography>
                    <Typography sx={{color:"#fff"}} variant="caption" display="block" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quo rerum delectus accusamus adipisci laboriosam maiores mollitia quos beatae impedit magnam alias animi illum optio. Assumenda quaerat unde deleniti? 
                    </Typography>
                    <Button className={classes.button} variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;