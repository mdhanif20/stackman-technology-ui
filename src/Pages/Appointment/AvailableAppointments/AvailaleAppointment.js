import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';
import Alert from '@mui/material/Alert';

const bookings = [
    {
    id:1,
    name:"Teeth Orthodontics",
    time:"8:00 AM - 9.00 AM",
    space:10
    },
    {
    id:2,
    name:"Cosmetic Dentistry",
    time:"10:05 AM - 11.30 AM",
    space:10
    },
    {
    id:3,
    name:"Teeth Cleaning",
    time:"5:00 AM - 6.30 AM",
    space:10
    },
    {
    id:4,
    name:"Cavity Protection",
    time:"7:00 AM - 8.30 AM",
    space:10
    },
    {
    id:5,
    name:"Teeth Orthodontics",
    time:"8:00 AM - 9.00 AM",
    space:10
    },
    {
    id:6,
    name:"Teeth Orthodontics",
    time:"8:00 AM - 9.00 AM",
    space:10
    }
]

const AvailaleAppointment = ({date}) => {
    const [bookingSuccess,setBookingSuccess] = useState(false)
    return (
        <Container>
            <h2 style={{padding:"50px",color:"#26C9C4"}}>Available Appointment {date.toDateString()} </h2>
            {
                bookingSuccess && <Alert sx={{mb:"50px"}} severity="success">Appointment Booking Successfully.</Alert>  
            }
                <Grid container spacing={2}>
                    {
                        bookings.map(booking=><Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                        >
                        </Booking>)
                    }
                    
                </Grid>
        </Container>
    );
};

export default AvailaleAppointment;