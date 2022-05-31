import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import doctor1 from "../../../images/doctor11.png";
import doctor2 from "../../../images/doctor12.png";
import doctor3 from "../../../images/doctor13.png";
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@mui/icons-material/Phone';

const useStyle = makeStyles({
    image:{
        width:"70%",
        height:"70%"
    },
    doctorText:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

const OurDoctors = () => {
    const classes = useStyle();
    return (
        <Container>
            <Typography  sx={{color:"#0bcdcd", fontSize:"22px",pt:5, my: 5, fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                   OUR DOCTORS
               </Typography>
               <Grid container>
                    <Grid sx={{my:3}} xs={12} md={4}>
                        <img className={classes.image} src={doctor1} alt="" />
                        <Typography variant="h6" gutterBottom component="div">
                            Dr.Faruk
                        </Typography>
                        <Typography className={classes.doctorText} variant="caption" gutterBottom>
                        <PhoneIcon sx={{fontSize:"18px",color:"#6CCCCC"}}/> <span>+8801609015767</span>
                    </Typography>
                    </Grid>
                    <Grid sx={{my:3}} xs={12} md={4}>
                        <img className={classes.image} src={doctor3} alt="" />
                        <Typography variant="h6" gutterBottom component="div">
                            Dr.Badry
                        </Typography>
                        <Typography className={classes.doctorText} variant="caption" gutterBottom>
                        <PhoneIcon sx={{fontSize:"18px",color:"#6CCCCC"}}/> <span>+8801609015767</span>
                    </Typography>
                    </Grid>
                    <Grid sx={{my:3}} xs={12} md={4}>
                        <img className={classes.image} src={doctor2} alt="" />
                        <Typography variant="h6" gutterBottom component="div">
                            Dr.Khan
                        </Typography>
                        <Typography className={classes.doctorText} variant="caption" gutterBottom>
                        <PhoneIcon sx={{fontSize:"18px",color:"#6CCCCC"}}/> <span>+8801609015767</span>
                    </Typography>
                    </Grid>
                    
               </Grid>
        </Container>
    );
};

export default OurDoctors;