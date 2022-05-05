import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Calendar from './../../../Sheared/Calendar/Calendar';
import AppointmentInfo from './AppointmentInfo';

const ClientInfo = () => {
    return (
        <Box sx={{p:{xs:1, sm:2}}}>
            <Typography sx={{fontWeight:700,textAlign:"start",pt:{xs:4,sm:0}}} variant="h5" gutterBottom component="div">
                Appointment
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Calendar></Calendar>
                </Grid>
                <Grid item xs={12} sm={6}>
                   <AppointmentInfo></AppointmentInfo>   
                </Grid>
            </Grid>
        </Box>
    );
};

export default ClientInfo;