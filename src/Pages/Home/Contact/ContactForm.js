import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import useAuth from './../../Hooks/useAuth';

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
        padding: "7px 40px",
        border: "0px",
        borderRadius: "25px",
        backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
        color: "#fff",
        cursor:"pointer",
        fontWeight:" 500",
    },
    button:{
        backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
        fontSize:"1.3rem",
    }
})
const ContactForm = () => {
    const classes = useStyle();
    const form = useRef();
    const {users} = useAuth();
    const sendEmail = e =>{
        e.preventDefault()
        emailjs.sendForm('service_64fo5li', 'template_k82qf6c', e.target, 'sEIjvaT255FOB530n')
        .then((res) => {
            alert("Email Send Successfully.")
            form.current.reset(); 
        }).catch(err => console.log(err));
    }
    return (
        <Container sx={{textAlign:"center"}}>
            <Box sx={{width:{xs:"94%",md:"60%"},margin:"auto"}}>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email" className={classes.input} placeholder="Enter your email" /> <br />
                    <input type="text" name="user_name" className={classes.input} placeholder='Subject' /> <br />
                    <textarea name="message" className={classes.textArea} id="" placeholder='Your Message'></textarea> <br />
                    <Button  className={classes.button} variant="contained">
                    <input className={classes.submitButton} type="submit" value="Send"/>
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default ContactForm;