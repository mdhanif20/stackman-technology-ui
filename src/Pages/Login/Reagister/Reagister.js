import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img from "../../../images/login.png";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Navbar from './../../Sheared/Navbar/Navbar';
import FooterHome from './../../Home/FooterHome/FooterHome';

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
    const {users,authError,registerUser,isLoading} = useAuth();
    const classes = useStyle();
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    const onChangeBlur = e =>{
        const field = e.target.name;
        const value= e.target.value;
        const newUser = {...user};
        newUser[field]=value
        setUser(newUser)
    }
    const loginAccount = e =>{
        if(user.password !== user.password2){
            alert("Password don't match")
            return
        }
        else{
            registerUser(user.email,user.password,user.name)
            if(users.email){
                navigate("/")
            }
        }
        
        e.preventDefault()
    }
    return (
       <Box>
        <Box>
            <Navbar></Navbar>
        </Box>
        <Container>
        <Box sx={{py:5}}>
                    
                    <Box className={classes.login} sx={{width:{md:"80%",xs:"90%"}, padding:{md:"70px 20px",xs:"30px 10px"}}}>
                    <Typography sx={{pb:2}} variant="h6" gutterBottom component="div">
                            Register
                        </Typography>

                { !isLoading &&  <form onSubmit={loginAccount}>
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}}
                            id="standard-basic"
                            type="Name"  
                            name="name"
                            onBlur={onChangeBlur}
                            label="Your Name"
                            variant="standard" 
                            /> <br /> <br /> 
                            
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}}
                            id="standard-basic"
                            type="Email"  
                            name="email"
                            onBlur={onChangeBlur}
                            label="Email"
                                variant="standard" 
                                /> <br /> <br /> 
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}} id="standard-basic" 
                            type="password" 
                            name="password"
                            onBlur={onChangeBlur}
                            label="Password" 
                            variant="standard" 
                            /> <br /> <br /> 
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}} id="standard-basic" 
                            type="password" 
                            name="password2"
                            onBlur={onChangeBlur}
                            label="Re-type Password" 
                            variant="standard" 
                            /> <br /> <br /> <br />
                            <Button sx={{ color:"#fff",width:{md:"75%",xs:1}}} type="submit" className={classes.fieldButton}>Reagister</Button> <br /> <br />
                            <Link style={{textDecoration:"none"}} to={"/login"}>
                                <Button variant="text">Already Registered? Please Login</Button>
                            </Link>
                    </form>
                }
                {isLoading && <CircularProgress />}
                {users?.email && <Alert severity="success">Reagister Successfully.</Alert>}
                {
                    authError && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {authError}
                </Alert>
                }
            </Box>
        </Box>
        </Container>
        <Box>
            <FooterHome></FooterHome>
        </Box>
       </Box>
    );
};

export default Reagister;