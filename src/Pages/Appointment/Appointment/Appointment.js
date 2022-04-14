import React from 'react';
import FooterHome from '../../Home/FooterHome/FooterHome';
import Navbar from '../../Sheared/Navbar/Navbar';
import AvailaleAppointment from '../AvailableAppointments/AvailaleAppointment';
import AppointmentHeader from './../AppointmentHeader/AppointmentHeader';
import Box from '@mui/material/Box';

const Appointment = () => {
    const [date,setDate] = React.useState(new Date());
    return (
        <div>
            <Box sx={{marginBottom:"5rem",backgroundColor:"#24262f"}}>
             <Navbar></Navbar>
            </Box>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailaleAppointment date={date}></AvailaleAppointment>
            <Box sx={{marginTop:"5rem"}}>
            <FooterHome></FooterHome>
            </Box>
            
        </div>
    );
};

export default Appointment;