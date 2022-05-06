import { Apps, Camera, Collections, Home, List, Logout, Person, Settings, Storefront, VideoCall} from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
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
                        <AppsIcon style={{fontSize:"30px"}} className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Deshboard</Typography>
                    </div>
                    <div className={classes.item}>
                        <CalendarTodayIcon style={{fontSize:"30px"}} className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Appointment</Typography>
                    </div>
                    <div className={classes.item}>
                        <PeopleIcon style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Patients</Typography>
                    </div>
                    <div className={classes.item}>
                        <AssignmentIcon style={{fontSize:"30px"}}  className={classes.icon}/>
                        <Typography style={{fontWeight:500}} className={classes.text}>Prescription</Typography>
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
                        <AppsIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Deshboard</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <CalendarTodayIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Appointment</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <PeopleIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Patients</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <AssignmentIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:500}} className={classes.textSmall}>Prescription</Typography>
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