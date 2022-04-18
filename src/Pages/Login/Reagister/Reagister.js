import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img from "../../../images/login.png";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    image:{
        width:"100%",
        height:"100%"
    },
    login:{
        
        boxShadow:" 1px 1px 43px 0px #ebe4e4",
        margin:"auto"
    },
    textField:{
       
    },
    fieldButton:{
        background: "linear-gradient(to right, #11D0DF 0%, #19D3AE 100%)"
    }
})
const Reagister = () => {
    const classes = useStyle();
    const [user,setUser] = useState({});
    const onChangeField = e =>{
        const field = e.target.name;
        const value= e.target.value;
        const newUser = {...user};
        newUser[field]=value
        setUser(newUser)
    }
    console.log(user)
    const loginAccount = e =>{
        if(user.Password !== user.Password2){
            alert("Password don't match")
            return
        }
        e.preventDefault()
    }
    return (
        <Container>
            <Box sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                       
                            <Box className={classes.login} sx={{width:{md:"80%",xs:"90%"}, padding:{md:"70px 20px",xs:"30px 20px"}}}>
                                    <Typography sx={{pb:2}} variant="h6" gutterBottom component="div">
                                            Reagister
                                        </Typography>
                                <form onSubmit={loginAccount}>
                                            <TextField 
                                            sx={{width:{md:"75%",xs:1}}}
                                            id="standard-basic"
                                            type="Email"  
                                            name="Email"
                                            onChange={onChangeField}
                                            label="User Name"
                                             variant="standard" 
                                             /> <br /> <br /> 
                                            <TextField 
                                            sx={{width:{md:"75%",xs:1}}} id="standard-basic" 
                                            type="password" 
                                            name="Password"
                                            onChange={onChangeField}
                                            label="Password" 
                                            variant="standard" 
                                            /> <br /> <br /> 
                                            <TextField 
                                            sx={{width:{md:"75%",xs:1}}} id="standard-basic" 
                                            type="password" 
                                            name="Password2"
                                            onChange={onChangeField}
                                            label="Re-type Password" 
                                            variant="standard" 
                                            /> <br /> <br /> <br />
                                            <Button sx={{ color:"#fff",width:{md:"75%",xs:1}}} type="submit" className={classes.fieldButton}>Reagister</Button> <br /> <br />
                                            <Link style={{textDecoration:"none"}} to={"/login"}>
                                             <Button variant="text">Already Reagistered? Please Login</Button>
                                            </Link>
                                 </form>
                                        
                            </Box>
                        
                    </Grid>
                    <Grid sx={{display:{md:"block",xs:"none"}}} item xs={12} md={6}>
                        <img className={classes.image} src={img} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Reagister;