import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterHome = () => {
    return (
        <Box sx={{ padding:{xs:"20px 30px 15px 30px",sm:"0px 0px 30px 0px"}}}>
            <Typography sx={{textAlign:"center", pt:7, color:"black",borderTop:"1px solid #1976D2"}} variant="subtitle1" display="block" gutterBottom>
                Copyright 2022-mdhanif2921@gmail.com 
            </Typography>
        </Box>
    );
};

export default FooterHome;