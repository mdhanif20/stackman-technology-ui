import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const useStyle = makeStyles({
    button:{
        "&:hover":{
            backgroundColor:"#004991"
        }
    }
})

const Login = () => {
    const classes = useStyle();
    const {singnInUser} = useAuth();
    const [user,setUser] = useState({});
    const navigate = useNavigate(); 
    
    const onChangeField = e =>{
        const field = e.target.name;
        const value= e.target.value;
        const newUser = {...user};
        newUser[field]=value
        setUser(newUser)
    }

    const loginAccount = e =>{
    singnInUser(user.Email,user.Password)
    navigate("/userSide")
        e.preventDefault()
    }
   
    return (
      <Box>
            <Container>
            <Box sx={{py:10}}>    
                <Box sx={{width:{md:"80%",xs:"90%"}, padding:{md:"70px 20px",xs:"30px 10px"}}}>
                    <Typography sx={{pb:2}} variant="h6" gutterBottom component="div">
                            Login
                        </Typography>
                <form  onSubmit={loginAccount} >
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}}id="standard-basic" 
                            name="Email"
                            onChange={onChangeField}
                            label="Email"
                                variant="standard" 
                                /> <br /> <br /> 
                            <TextField 
                            sx={{width:{md:"75%",xs:1}}} id="standard-basic" 
                            type="password" 
                            name="Password"
                            onChange={onChangeField}
                            label="Password" 
                            variant="standard" 
                            /> <br /> <br /> <br />
                            <Button className={classes.button}  sx={{ color:"#fff",width:{md:"75%",xs:1},backgroundColor:"#1976D2"}} type="submit">Sign In</Button> 
                            
                    </form>

                    <Link style={{textDecoration:"none"}} to={"/reagister"}>
                        <Button variant="text" sx={{fontSize:"20px",mt:3}}>New User? Please Register</Button>
                    </Link>
                </Box>
            </Box>
        </Container>
      </Box>
    );
};

export default Login;