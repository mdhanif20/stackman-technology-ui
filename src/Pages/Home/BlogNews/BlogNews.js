import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import image from "../../../images/DownloadSecond.png";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import doctor1 from "../../../images/people-1.png";
import doctor2 from "../../../images/people-2.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyle = makeStyles({
    commentBg:{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        display:"flex",
        alignItems:"center",
        margin:"10px 0"
       
    },
    bgColor:{
        backgroundColor: "rgba(252 252 255 / 46%)",
        backgroundBlendMode: "screen"
    },
    personInfo:{
        display:"flex",
        alignItems:"center",
        margin:"10px 0"
    },
    image:{
        width: "70px",
        height: "70px"
    },
    firstDecorateCard:{
        background: "linear-gradient(to right, #19D3AF, #0FCFEC)",
        color:"#fff",
        backgroundBlendMode: "screen"
    },
    array:{

    }
    
})


const BlogNews = () => {
    const classes = useStyle();
    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch("./comment.JSON")
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    return (
        <Container>
                
        <Box sx={{textAlign:"center"}}>
           
               <Typography  sx={{color:"#0bcdcd", fontSize:"22px",pt:5, my: 1, fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                   OUR BLOG
               </Typography> 
               <Typography sx={{fontWeight: 'medium', color:"#2e3f58"}} variant="h4" gutterBottom component="div">
                   From Our Blog News
               </Typography>
           
        </Box>
      
   <Box sx={{my:4}}>
       <Grid container>
                <Grid xs={12} md={4}>
                     
                                <Card className={classes.firstDecorateCard} sx={{p:3,mr:{xs:0,md:2},my:2,boxShadow: 1, textAlign:"start", height:"260px"}} >
                                    
                                        <Box className={classes.personInfo}>
                                            <Box sx={{textAlign:"start"}}>
                                            <Typography  sx={{ fontSize:"18px", fontWeight: 'bold'}} variant="subtitle2" display="block" gutterBottom>
                                                Rashed Kabir
                                            </Typography>
                                            <Typography sx={{fontWeight: 'medium', opacity:".9"}} variant="caption" display="block" gutterBottom>
                                                23 April 2021
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="subtitle2" sx={{fontWeight: 'regular',fontSize:"18px"}} gutterBottom>
                                        Check at least a doctor in a year from your teeth
                                    </Typography>
                                    <ArrowForwardIcon sx={{fontSize:"61px",mt:5}}/>
                                      
                            </Card>
                        
                  </Grid>
                   
                <Grid xs={12} md={4}>
                       <Card sx={{p:3,mr:{xs:0,md:2},my:2,boxShadow: 1, textAlign:"start", height:"260px"}}>
                           
                           <Box className={classes.personInfo}>
                               <Box sx={{mr:2}}>
                                   <img className={classes.image} src={doctor1} alt="" />
                               </Box>
                                   <Box sx={{textAlign:"start"}}>
                                   <Typography  sx={{ fontSize:"18px", fontWeight: 'bold'}} variant="subtitle2" display="block" gutterBottom>
                                    Dr. Caudi
                                   </Typography>
                                   <Typography sx={{fontWeight: 'medium',opacity:".6"}} variant="caption" display="block" gutterBottom>
                                    23 April 2021
                                   </Typography>
                               </Box>
                           </Box>
                           <Typography variant="subtitle2" sx={{fontWeight: 'bold',fontSize:"20px", opacity:".8"}} gutterBottom>
                               2 times of a brush keep you healthy
                           </Typography>
                           <Typography sx={{opacity:".5"}} variant="subtitle1" gutterBottom>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Illum temporibus repel.
                           </Typography>
                       </Card>
                  </Grid>
                   
                <Grid xs={12} md={4}>
                       <Card sx={{p:3,mr:{xs:0,md:2},my:2,boxShadow: 1, textAlign:"start", height:"260px"}}>
                           
                           <Box className={classes.personInfo}>
                               <Box sx={{mr:2}}>
                                   <img className={classes.image} src={doctor2} alt="" />
                               </Box>
                                   <Box sx={{textAlign:"start"}}>
                                   <Typography  sx={{ fontSize:"18px", fontWeight: 'bold'}} variant="subtitle2" display="block" gutterBottom>
                                    Dr. Caudi
                                   </Typography>
                                   <Typography sx={{fontWeight: 'medium',opacity:".6"}} variant="caption" display="block" gutterBottom>
                                    23 April 2021
                                   </Typography>
                               </Box>
                           </Box>
                           <Typography variant="subtitle2" sx={{fontWeight: 'bold',fontSize:"20px", opacity:".8"}} gutterBottom>
                               The tooth cancer is taking a challenge
                           </Typography>
                           <Typography sx={{opacity:".5"}} variant="subtitle1" gutterBottom>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem. Illum temporibus repel.
                           </Typography>
                       </Card>
                  </Grid>
                   
                  
         
           
       </Grid>
   </Box>
</Container>
    );
};

export default BlogNews;