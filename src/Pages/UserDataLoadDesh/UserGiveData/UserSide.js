import React from 'react';
import Navbar from '../../Sheared/Navbar/Navbar';
import Box from '@mui/material/Box';
import FooterHome from '../../Home/FooterHome/FooterHome';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Calendar from '../../Sheared/Calendar/Calendar';
import TakeDataFromUser from '../TakenDataAndUploadServer/TakeDataFromUser';

const UserSide = () => {
    const [date,setDate] = React.useState(new Date());
    return (
        <div>
            <Box sx={{marginBottom:"5rem",backgroundColor:"#24262f"}}>
             <Navbar></Navbar>
            </Box>
            <Container>
            <Grid container spacing={2}>
                <Grid sx={{zIndex:0}} item xs={12} md={4}>
                    <Box sx={{marginLeft:"-25px"}}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                    </Box>
                </Grid>
                <Grid sx={{zIndex:10}} item xs={12} md={8}>
                    <TakeDataFromUser date={date}></TakeDataFromUser>
                </Grid>
                
            </Grid>
            </Container>
           
            <Box sx={{marginTop:"5rem"}}>
            <Box>
            <FooterHome></FooterHome>
            </Box>
            </Box>
            
        </div>
    );
};

export default UserSide;