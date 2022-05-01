import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../Hooks/useAuth';
import Appointment from './../Appointment/Appointment';

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

const BookingModal = ({openBooking, setBookingSuccess, handleBookingClose,booking,date}) => {

    const {name,time} = booking;
    const {users} = useAuth();
    const {displayName,email} = users;
    const defaultInfo = {Name: displayName, Email: email, Phone:""}
    const [bookingInfo,setBookingInfo] = useState(defaultInfo); 

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value
        setBookingInfo(newInfo);
    }
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: new Date(date).toLocaleDateString()
    }
    
    const bookingSubmit = e =>{
        fetch("http://localhost:5000/appointments",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(data=>{
        if(data.insertedId){
          setBookingSuccess(true)
          setInterval(() => {
            setBookingSuccess(false)
          }, 18000);
          handleBookingClose();
        }
        console.log(data)
      })

      
      // e.preventDefault();
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
                name="Name"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue={displayName}
                size="small"
                />
                <TextField
                required
                sx={{width:"100%",my:2}}
                label="Phone"
                name="Phone"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue="+8801"
                size="small"
                />
                <TextField
                sx={{width:"100%",my:2}}
                label="Email"
                name="Email"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue={email}
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