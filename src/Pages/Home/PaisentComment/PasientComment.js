import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import image from "../../../images/Download.png";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const useStyle = makeStyles({
    commentBg:{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
       
    },
    bgColor:{
        backgroundColor: "rgba(252 252 255 / 46%)",
        backgroundBlendMode: "screen"
    },
    personInfo:{
        display:"flex",
        alignItems:"center",
        padding:"10px",
        marginTop:"10px"
    },
    image:{
        width: "70px",
        height: "70px"
    }
    
})

const PasientComment = () => {
    const classes = useStyle();
    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch("./comment.JSON")
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    
    return (
        <Container>
                
                 <Box className={classes.commentBg} sx={{textAlign:"start",display:{xs:"none",md:"block"}}}>
                    <Box className={classes.bgColor}>
                        <Typography  sx={{color:"#0bcdcd", fontSize:"22px",pt:5, my: 1, fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                            Testimonial
                        </Typography> 
                        <Typography sx={{fontWeight: 'medium', color:"#2e3f58"}} variant="h4" gutterBottom component="div">
                            What's Our Paisent <br /> Says
                        </Typography>
                    </Box>
                 </Box>

                 <Box sx={{textAlign:"center",display:{xs:"block",md:"none"}}}>
                    <Box className={classes.bgColor}>
                        <Typography  sx={{color:"#0bcdcd", fontSize:"22px",pt:5, my: 1, fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                            Testimonial
                        </Typography> 
                        <Typography sx={{fontWeight: 'medium', color:"#2e3f58"}} variant="h4" gutterBottom component="div">
                            What's Our Paisent Says
                        </Typography>
                    </Box>
                 </Box>
               
            <Box sx={{my:7}}>
                <Grid container>
                    {
                        comments.map(comment=><Grid key={comment.id} xs={12} md={4}>
                                <Card sx={{p:3,mr:{xs:0,md:2},my:2,boxShadow: 3 }}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {comment.details}
                                    </Typography>
                                    <Box className={classes.personInfo}>
                                        <Box  sx={{mr:2}} >
                                            <img className={classes.image} src={comment.image} alt="" />
                                        </Box>
                                            <Box sx={{textAlign:"start"}}>
                                            <Typography  sx={{color:"#0bcdcd", fontSize:"18px", fontWeight: 'bold'}} variant="button" display="block" gutterBottom>
                                            {comment.name}
                                            </Typography>
                                            <Typography sx={{fontSize:"18px"}} variant="body2" display="block" gutterBottom>
                                             {comment.country}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                           </Grid>
                            
                            )
                    }
                    
                </Grid>
            </Box>
        </Container>
    );
};

export default PasientComment;