import React from 'react';
import Navbar from '../../Sheared/Navbar/Navbar';
import AvailaleAppointment from '../AvailableAppointments/AvailaleAppointment';
import AppointmentHeader from './../AppointmentHeader/AppointmentHeader';
import Box from '@mui/material/Box';
import FooterHome from '../../Home/FooterHome/FooterHome';


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
            <Box sx={{bgcolor:"#0f0c0b",boxShadow: "1px 12px 12px 14px #24262f",color:"#fff"}}>
            <FooterHome></FooterHome>
            </Box>
            </Box>
            
        </div>
    );
};

export default Appointment;