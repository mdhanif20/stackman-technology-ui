import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Services from '../Services';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Service = () => {

    const[services,setServices] = useState([]);
    useEffect(()=>{
       fetch("./services.JSON")
       .then(res => res.json())
       .then(data => setServices(data))
    },[]);

    return (
        <div>
            <Container>
            <Typography  sx={{color:"#2196f3", fontSize:"18px", mt: 5}} variant="button" display="block" gutterBottom>
                Our Services
            </Typography>
            <Typography  sx={{ fontWeight: 500 , pb:2, pt: .2}} variant="h4" gutterBottom component="div">
                Service We Provided
            </Typography>
            <Box sx={{ flexGrow: 1 }}> 
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
            {
                services.map(service=>
                    
                           <Services key={service.id} service={service}></Services>  
                    )
            }
            </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default Service;