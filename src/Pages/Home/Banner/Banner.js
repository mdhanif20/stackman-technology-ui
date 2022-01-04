import React from 'react';
import Box from '@mui/material/Box';
import image from "../../../images/chair.png";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    background:{
        backgroundImage: `url(${image})`,
        backgroundSize:'cover',
        backgroundPosition:"center",
        marginTop: "-110px"
    },
    doubleColorBg:{
        background:`linear-gradient(
            to right,
            rgba(187 187 187 / 46%) 0%,
            rgba(187 187 187 / 46%) 70%,
            rgba(12, 13, 22, 0.88) 70%,
            rgba(12, 13, 22, 0.88) 100%
        )`,
        backgroundBlendMode: "screen"
    },
    textArea:{
        textAlign:"start",

    },
    button:{
        margin:"20px 0px 0px 0px",
        backgroundColor:"#3bc5c5",
        '&:hover':{
            backgroundColor:"#3bc5c5"
        }
    },
    bannerImage:{
        width:"100%",
        height:"90%"
    },
    smallDougleColorBg:{
        background:`linear-gradient(
            to top,
            rgba(252 252 255 / 46%) 0%,
            rgba(252 252 255 / 46%) 65%,
            rgba(12, 13, 22, 0.78) 65%,
            rgba(12, 13, 22, 0.78) 100%
        )`,
        backgroundBlendMode: "screen"
    },
})

const Banner = () => {
    const classes = useStyle();
    return (
        <Box className={classes.background}>

           <Box sx={{display:{xs:"none", md:"block"}}} className={classes.doubleColorBg}>
                <Container sx={{py:20}}>
                    <Grid container >
                        <Grid  className={classes.textArea} xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'medium', color:"#203047",pt:3}} variant="h4" gutterBottom component="div">
                            Your New Smile <br /> Start Here
                        </Typography>
                        <Typography sx={{pb:2}} variant="caption" display="block" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Et iste saepe tempora officia laborum aliquam adipisci <br />perferendis porro minima. Et iste saepe tempora <br /> officia laborum aliquam adipisci perferendis porro minima.
                        </Typography>
                        <Button className={classes.button} variant="contained">GET APPOINMENT</Button>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <img  className={classes.bannerImage} src={image} alt="" />
                        </Grid>
                        
                    </Grid>
                </Container>
           
           </Box>

           <Box  sx={{display:{xs:"block", md:"none"},pt:7}} className={classes.smallDougleColorBg}>
                <Container sx={{pt:10,pb:7}}>
                    <Grid container >
                    <Grid sx={{display:{xs:"block", md:"none"}}} xs={12} md={6}>
                            <img  className={classes.bannerImage} src={image} alt="" />
                        </Grid>
                        <Grid  className={classes.textArea} xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'medium', color:"#203047",pt:3}} variant="h4" gutterBottom component="div">
                            Your New Smile <br /> Start Here
                        </Typography>
                        <Typography sx={{pb:2}} variant="caption" display="block" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Et iste saepe tempora officia laborum aliquam adipisci <br />perferendis porro minima. Et iste saepe tempora <br /> officia laborum aliquam adipisci perferendis porro minima.
                        </Typography>
                        <Button className={classes.button} variant="contained">GET APPOINMENT</Button>
                        </Grid>
                        
                        
                    </Grid>
                </Container>
           
           </Box>
        </Box>
    );
};

export default Banner;