import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';


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
        cursor:"pointer",
        fontWeight:" 500"
    }
})
const ContactForm = () => {
    const classes = useStyle();
    const form = useRef();
    const sendEmail = e =>{
        e.preventDefault()
        emailjs.sendForm('service_64fo5li', 'template_k82qf6c', e.target, 'sEIjvaT255FOB530n')
        .then((res) => {
            alert("Email Send Successfully.")
        }).catch(err => console.log(err));
    }
    return (
        <Container sx={{textAlign:"center"}}>
            <Box sx={{width:{xs:"94%",md:"50%"},margin:"auto"}}>
                <form onSubmit={sendEmail}>
                    <input type="email" name="user_email" className={classes.input} placeholder='Email Address' /> <br />
                    <input type="text" name="user_name" className={classes.input} placeholder='Subject' /> <br />
                    <textarea name="message" className={classes.textArea} id="" placeholder='Your Message'></textarea> <br />
                    <input className={classes.submitButton} type="submit" value="Submit"/>
                </form>
            </Box>
        </Container>
    );
};

export default ContactForm;