import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import useAuth from '../../Hooks/useAuth';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const TakeDataFromUser = ({date}) => {
    const [tokenNumber,setTokenNumber] = useState("");
    const {users} = useAuth();
    const {displayName,email} = users;
    const DateLocal = new Date(date).toLocaleDateString();
    const defaultInfo = {Name: displayName, email: email, number:"",date:DateLocal, token:tokenNumber}
    const [bookingInfo,setBookingInfo] = useState(defaultInfo); 
    const [number,setNumber] = useState('');
    const handleOnChange = e =>{
        setNumber(e.target.value);
        
    }
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value
        setBookingInfo(newInfo);
    }
    const getAllData = {
        ...bookingInfo,
        date:DateLocal,
        token:tokenNumber
    }
    console.log(getAllData)
    useEffect(()=>{
        fetch("http://localhost:5000/userInfo")
        .then(res=>res.json())
        .then(data => {
            setTokenNumber(parseInt(data[data.length-1].token))
        })
    },[]);


    const addUserDataOnDatabase = () =>{
        if(getAllData.number=="" || getAllData.Name =="" ){
            alert("Please, fill up name or number properly!")
        }
        else{
            fetch("http://localhost:5000/userInfo",{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body: JSON.stringify(getAllData)
          })
          .then(res => res.json())
          .then(data=>{
            if(data.insertedId){
              setTokenNumber(tokenNumber + 1)
              setNumber('')
              alert("User Data Save Successfully!")
              setBookingInfo(defaultInfo)
            }
          })
        }
    }

    return (
        <Box>
            <Box sx={{boxShadow:"0px 5px 27px #858383",padding:"20px 20px 50px 20px"}}>
            <h2 style={{padding:"20px",textAlign:"start"}}>Date: {date.toDateString()} </h2>
            

            <Box>
                <TextField
                sx={{width:"100%",my:2}}
                label="Your Name"
                name="Name"
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue={displayName}
                size="small"
                />
                <Typography sx={{textAlign:"start"}} variant="subtitle1" gutterBottom>
                   New token number: {tokenNumber}
                </Typography>
               
                <input
                required
                style={{width:"97%",padding:"10px",fontSize:"18px"}}
                value= {number}
                type="number"
                label="number"
                name="number"
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                id="outlined-size-small"
                placeholder="add new number"
                size="small"
                />
                 
               
            <br />
               <Button onClick={()=>addUserDataOnDatabase()} style={{backgroundColor:"#1976D2", fontSize:"1.1rem",marginTop:'20px'}} variant="contained">Add User Data</Button>
            </Box>
            </Box>
        </Box>
    );
};

export default TakeDataFromUser;