import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    image:{
        width: "auto",
        margin:" auto",
        padding: "10px"
    },
    card:{
        boxShadow: "none",
        padding:"10px",
        transition:".5s",
        '&:hover':{
            boxShadow: "0px 0px 3px 0px #cbc9c9",
            transform:"scale(1.03)"
        }
    }
})

const Services = (props) => {
    const classes = useStyle();
    const{name,image,details} = props.service;
   
    return (
        
                
            <Grid item xs={4}  md={4} >
                <Card className={classes.card}>
                     <CardMedia
                        className={classes.image}
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    /> 
                    
                     <Typography  sx={{ fontWeight: 500 }} variant="h6" gutterBottom component="div">
                         {name}
                     </Typography>
                    <Typography variant="body2" gutterBottom>
                   {details}
                </Typography>
                 </Card>
            </Grid>
                  
           
    );
};

export default Services;