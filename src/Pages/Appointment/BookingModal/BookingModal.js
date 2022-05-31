import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../Hooks/useAuth';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:"10px"
};

const BookingModal = ({openBooking, setBookingSuccess, handleBookingClose,booking,date}) => {
  
    const {name,time} = booking;
    const DateLocal = new Date(date).toLocaleDateString();
    const {users} = useAuth();
    const {displayName,email} = users;
    const defaultInfo = {Name: displayName, email: email, phone:"",weight:"60",age:"30",gender:"Male",time:time,date:DateLocal,visited:"Not visited"}
    const [bookingInfo,setBookingInfo] = useState(defaultInfo); 
    const [age, setAge] = React.useState('');
    const handleChange = e => {
      setAge(e.target.value);
    };

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
      date: DateLocal
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
      })
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
                <Box sx={{display:"flex"}}>
                  <TextField
                  disabled
                  sx={{width:"100%",my:2,mr:1}}
                  label="Time"
                  id="outlined-size-small"
                  defaultValue={time}
                  size="small"
                  />
                  <TextField
                  disabled
                  sx={{width:"100%",my:2,ml:1}}
                  label="Date"
                  id="outlined-size-small"
                  defaultValue={date}
                  size="small"
                  />
                </Box>
                
                <Box sx={{display:"flex"}}>
                <TextField
                sx={{width:"100%",my:2}}
                label="Your Name"
                name="Name"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue={displayName}
                size="small"
                />
                 <FormControl sx={{ m: 1, minWidth:{xs:80,sm:100} }}>
                  <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Third Gender">Third Gender</MenuItem>
                  </Select>
                </FormControl>
                </Box>
               
                <TextField
                required
                sx={{width:"100%",my:2}}
                label="Phone"
                name="phone"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue="+8801"
                size="small"
                />
                <TextField
                sx={{width:"100%",my:2}}
                label="Email"
                name="email"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue={email}
                size="small"
                />
               <Box sx={{display:"flex"}}>
               <TextField
                sx={{width:"100%",my:2,mr:1}}
                label="Age"
                name="age"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue="28"
                size="small"
                />
                <TextField
                sx={{width:"100%",my:2,ml:1}}
                label="Weight"
                name="weight"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue="60"
                size="small"
                />
               </Box>
                
                <Button onClick={()=> bookingSubmit()} style={{backgroundImage: "linear-gradient(to right, #19D3AE , #0FEFCB)",
            fontSize:"1.1rem"}} variant="contained">SEND</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default BookingModal;