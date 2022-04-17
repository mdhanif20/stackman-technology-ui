import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img from "../../../images/login.png";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

const Login = () => {
    const classes = useStyle();
    return (
        <Container>
            <Box sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                       
                            <Box className={classes.login} sx={{width:{md:"80%",xs:"90%"}, padding:{md:"70px 20px",xs:"30px 20px"}}}>
                                    <Typography sx={{pb:2}} variant="h6" gutterBottom component="div">
                                            Login
                                        </Typography>
                                        <TextField sx={{width:{md:"75%",xs:1}}}id="standard-basic" label="User Name" variant="standard" /> <br /> <br /> 
                                            <TextField sx={{width:{md:"75%",xs:1}}} id="standard-basic" type="password" label="Password" variant="standard" /> <br /> <br /> <br />
                                        <Button sx={{ color:"#fff",width:{md:"75%",xs:1}}} className={classes.fieldButton}>Sign In</Button>
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

export default Login;