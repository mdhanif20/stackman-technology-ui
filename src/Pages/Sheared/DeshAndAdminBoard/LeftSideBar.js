import { Apps, Camera, Collections, Home, List, Logout, Person, Settings, Storefront, VideoCall } from '@mui/icons-material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';

const useStyle = makeStyles({
    container:{
        padding:"40px 20px", 
        paddingBottom:".09px",
        height:"100vh",
        position: "sticky",
        color:'#fff',
        top:0
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom:"25px",
        cursor:"pointer",
        
    },
    icon:{
        marginRight:"6px",
    },
    text:{
        fontWeight:800,
        fontSize:"1.1rem"
    },
    containerSmall:{
        padding:"20px 5px", 
        paddingBottom:".09px",
        height:"98vh", 
        position: "sticky",
        color:'#fff',
        top:0
    },
    textSmall:{
        fontWeight:800,
        border:"2px solid #2D2422",
        padding:"2px 16px",
        borderRadius:"30px",
        backgroundColor:"#2D2422",
        marginLeft:"-100%",
        opacity:0
    },
    itemSmall:{
        display:"flex",
        alignItems:"center",
        marginBottom:"25px",
        cursor:"pointer",
        '&:hover $textSmall':{
            marginLeft:"0",
            opacity:1,
            transition:".6s"
        }
    },
    
    iconSmall:{
        marginRight:"6px",
    }
   
})
 


const LeftSideBar = () => {
    const classes = useStyle();
    return (
        <Box>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
                    <Container sx={{  bgcolor:"#0f0c0b",width:"200px"}} className={classes.container}>
                    <div className={classes.item}>
                        <Home style={{fontSize:"30px"}} className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Home Page</Typography>
                    </div>
                    <div className={classes.item}>
                        <Person style={{fontSize:"30px"}} className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Friends</Typography>
                    </div>
                    <div className={classes.item}>
                        <List style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Lists</Typography>
                    </div>
                    <div className={classes.item}>
                        <Camera style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Camera</Typography>
                    </div>
                    <div className={classes.item}>
                        <VideoCall style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Video</Typography>
                    </div>
                   
                    <div className={classes.item}>
                        <Storefront style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Market Place</Typography>
                    </div>
                    <div className={classes.item}>
                        <Settings style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Settings</Typography>
                    </div>
                    <div className={classes.item}>
                        <Logout style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Logout</Typography>
                    </div>
                </Container>
            </Box>

            <Box sx={{display:{xs:"block",sm:"none"}}}>
                    <Container sx={{ bgcolor:"#0f0c0b",width:"34px"}} className={classes.containerSmall}>
                    <div className={classes.itemSmall}>
                        <Home style={{fontSize:"25px"}} className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>DESHBOARD</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <Person style={{fontSize:"25px"}} className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Friends</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <List style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Lists</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <Camera style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Camera</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <VideoCall style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Video</Typography>
                    </div>
                    
                    
                    <div className={classes.itemSmall}>
                        <Settings style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}}  className={classes.textSmall}>Settings</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <Logout style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}}  className={classes.textSmall}>Logout</Typography>
                    </div>
                </Container>
            </Box>
            
        </Box>
       
        
    );
};

export default LeftSideBar;