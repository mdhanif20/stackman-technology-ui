import { Logout} from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleIcon from '@mui/icons-material/People';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';


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
    linkDesign:{
        textDecoration:"none",
        color:"#fff"
    }
    ,
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
    const {admin,logOut,users} = useAuth();
    const logOutEmail = () =>{
        const sure = window.confirm("Are You Sure? You Want To log Out.");
        if(sure){
          logOut();
        }
      }

    return (
        <Box sx={{display:"flex"}}>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
                    <Container sx={{  bgcolor:"#1976D2",width:"200px"}} className={classes.container}>

                    <Link className={classes.linkDesign} to="/deshboard">
                    <div className={classes.item}>
                        <AppsIcon style={{fontSize:"30px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:400}} className={classes.text}>Deshboard</Typography>
                    </div>
                    </Link>

                   {
                        
                    admin && <Box>
                    <Link className={classes.linkDesign} to="/deshboard/allUserData">
                        <div className={classes.item}>
                            <PeopleIcon style={{fontSize:"30px"}}  className={classes.icon}/>
                            <Typography style={{fontWeight:400}} className={classes.text}>AdminPanel</Typography>
                        </div>
                    </Link>
                    </Box>
                   }

                    {
                        users?.email?
                        <div onClick={()=>logOutEmail()} className={classes.item}>
                            <Logout style={{fontSize:"30px"}}  className={classes.icon}/>
                            <Typography style={{fontWeight:400}} className={classes.text}>Log Out</Typography>
                        </div>
                        :
                        <Link style={{textDecoration:"none",color:"#fff"}} to="/home">
                        <div className={classes.item}>
                            <Logout style={{fontSize:"30px"}}  className={classes.icon}/>
                            <Typography style={{fontWeight:400}} className={classes.text}>Log In</Typography>
                        </div>
                        </Link>
                      }
                    
                </Container>
            </Box>

            <Box sx={{display:{xs:"block",sm:"none"},zIndex:1}}>
                    <Container sx={{ bgcolor:"#0f0c0b",width:"34px"}} className={classes.containerSmall}>
                    <Link className={classes.linkDesign} to="/deshboard"> 
                        <div className={classes.itemSmall}>
                            <AppsIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Deshboard</Typography>
                        </div>
                    </Link>
                    
                    {
                        
                        admin && <Box>
                        <Link className={classes.linkDesign} to="/deshboard/allUserData">
                        <div className={classes.itemSmall}>
                            <PeopleIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>AdminPanel</Typography>
                        </div>
                        </Link>
                       
                        </Box>
                       }
                          

                    {
                        users?.email?
                        <div onClick={()=>logOutEmail()} className={classes.itemSmall}>
                            <Logout style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}}  className={classes.textSmall}>Log Out</Typography>
                        </div>
                        :
                        <Link style={{textDecoration:"none",color:"#fff"}} to="/home">
                            <div className={classes.itemSmall}>
                                <Logout style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                                <Typography style={{fontWeight:400}}  className={classes.textSmall}>Log In</Typography>
                            </div>
                        </Link>
                      }
                    
                </Container>
            </Box>
            <Outlet/>
        </Box>
       
        
    );
};

export default LeftSideBar;