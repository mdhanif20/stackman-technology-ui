import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import bg from "../../../images/appointment-bg.png";
import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';

const useStyle = makeStyles({
    bgImage:{
        // background:`url(${bg})`,
        // backgroundColor: "rgba(61, 61, 61, .8)",
        backgroundBlendMode: "darken, luminosity",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding:"40px 0px",
        textAlign:"start"
    }
})

const Contact = () => {
    const classes = useStyle();
    return (
        <Box className={classes.bgImage}>
            <Typography  sx={{color:"#fff", fontSize:"18px", fontWeight: 'bold',textAlign:"start"}} variant="button" display="block" gutterBottom>
                   Contact Us
               </Typography>
               <Typography sx={{color:"#fff",textAlign:"start"}} variant="h5" gutterBottom component="div">
                    Always Contact With Us
                </Typography>
                <Box>
                    <ContactForm></ContactForm>
                </Box>
        </Box>
    );
};

export default Contact;