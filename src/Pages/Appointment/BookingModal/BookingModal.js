import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:"10px"
};

const BookingModal = ({openBooking, handleBookingClose,booking,date}) => {
    const {name,time} = booking;

    const bookingSubmit = e =>{
      handleBookingClose();
      alert("Submitted Data");
    
      e.preventDefault()
    }

    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{color:"#26C9C4",mb:2}} id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          
          <form>
            <TextField
            disabled
            sx={{width:"100%",my:2}}
            label="Time"
            id="outlined-size-small"
            defaultValue={time}
            size="small"
            />
            <TextField
            sx={{width:"100%",my:2}}
            label="Your Name"
            id="outlined-size-small"
            defaultValue="Mr. Abdur Rahman"
            size="small"
            />
            <TextField
            sx={{width:"100%",my:2}}
            label="Phone"
            id="outlined-size-small"
            defaultValue="+8801874189806"
            size="small"
            />
            <TextField
            sx={{width:"100%",my:2}}
            label="Email"
            id="outlined-size-small"
            defaultValue="mdhanif115825@gmail.com"
            size="small"
            />
            <TextField
            disabled
            sx={{width:"100%",my:2}}
            label="Date"
            id="outlined-size-small"
            defaultValue={date}
            size="small"
            />
            <Button onClick={()=> bookingSubmit()} style={{backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
        fontSize:"1.1rem"}} variant="contained">SEND</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;