import { Apps, Camera, Collections, Home, List, Logout, Person, Settings, Storefront, VideoCall } from '@mui/icons-material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    container:{
        paddingTop:"90px",
        paddingBottom:".09px",
        height:"100vh",
        /* color:"#555", */
        // borderRight:"1px solid #DFDFDF",
        position: "sticky",
        // width:"200px",
        top:0
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom:"25px",
        cursor:"pointer",
        
    },
    icon:{
        marginRight:"6px"
    },
    text:{
        fontWeight:800
    }
})

const Leftbar = () => {
    const classes = useStyle();
    return (
        <Container sx={{ boxShadow: 3, bgcolor:{xs:"#1976D2",sm:"#fff"} ,color:{xs:"white",sm:"#555"}}} className={classes.container}>
            <div className={classes.item}>
                <Home style={{fontSize:"20px"}} className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } , }} className={classes.text}>Home Page</Typography>
            </div>
            <div className={classes.item}>
                <Person style={{fontSize:"20px"}} className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <List style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <Camera style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <VideoCall style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Video</Typography>
            </div>
            <div className={classes.item}>
                <Apps style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Collections style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <Logout style={{fontSize:"20px"}}  className={classes.icon}/>
                <Typography style={{fontWeight:500}} sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.text}>Logout</Typography>
            </div>
        </Container>
        
    );
};

export default Leftbar;