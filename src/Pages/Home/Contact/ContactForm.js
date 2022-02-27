import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';


const useStyle = makeStyles({
    input:{
        width: "100%",
        fontSize: "18px",
        padding: "12px 4px",
        borderRadius: "7px",
        border: "0px",
        marginTop:"15px"
    },
    textArea:{
        width: "100%",
        height: "90px",
        padding: "12px 4px",
        borderRadius: "7px",
        margin:" 15px 0px",
        fontSize: "18px",
        fontFamily: 'Roboto'
    },
    submitButton:{
        fontSize: "23px",
        padding: "12px 76px",
        background: "linear-gradient(to right, #19D3AF, #10D0E9)",
        border: "0px",
        borderRadius: "25px",
        color: "#fff",
        fontWeight:" 500"
    }
})
const ContactForm = () => {
    const classes = useStyle();
    return (
        <Container sx={{textAlign:"center"}}>
            <Box sx={{width:{xs:"94%",md:"50%"},margin:"auto"}}>
                <form action="">
                    <input type="email" className={classes.input} placeholder='Email Address' /> <br />
                    <input type="text" className={classes.input} placeholder='Subject' /> <br />
                    <textarea name="" className={classes.textArea} id="" placeholder='Your Message'></textarea> <br />
                    <input className={classes.submitButton} type="submit" value="Submit"/>
                </form>
            </Box>
        </Container>
    );
};

export default ContactForm;