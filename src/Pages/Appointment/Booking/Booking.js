import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const useStyle = makeStyles({
    button:{
        backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
        fontSize:"1.3rem"
    }
})


const Booking = ({booking,date}) => {
    const classes = useStyle();
    const { name,time,space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
           <>
             <Grid item xs={12} sm={6} md={4} sx={{py:5}}>
                <Paper sx={{py:5}} elevation={3}> 
                    <Typography sx={{color:"#26C9C4",fontSize:"1.5rem"}} variant="h6" gutterBottom component="div">
                    {name}                 
                    </Typography>
                    <Typography sx={{fontSize:"1.1rem"}} variant="subtitle2" gutterBottom component="div">
                     {time}
                    </Typography>
                    <Typography sx={{opacity:".7",py:1}} variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen}  className={classes.button} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
            booking = {booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            date={date.toDateString()}
            ></BookingModal>
           </>

    );
};

export default Booking;