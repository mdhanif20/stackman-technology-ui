import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Calendar from './../../../Sheared/Calendar/Calendar';
import UserSideSingleInfo from './UserSideSingleInfo';

const ClientInfo = () => {
    const [date,setDate] = useState(new Date())
    return (
        <Box sx={{p:{xs:1, sm:2}}}>
            <Typography sx={{fontWeight:700,textAlign:"start",pt:{xs:4,sm:0}}} variant="h5" gutterBottom component="div">
               User Information
            </Typography>
            <Grid container spacing={2}>
                <Grid item sx={{paddingLeft:"0",marginLeft:"-20px"}} sm={12} md={6}>
                    <Calendar
                    date={date}
                    setDate={setDate}
                    ></Calendar>
                </Grid>
                <Grid item style={{paddingLeft:"15px"}} sm={12} md={6}>
                   <UserSideSingleInfo
                   date ={date}
                   ></UserSideSingleInfo>   
                </Grid>
            </Grid>
        </Box>
    );
};

export default ClientInfo;