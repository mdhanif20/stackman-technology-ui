import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import useAuth from './../../../Hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import AppointmentData from './AppointmentData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  

const AppointmentInfo = ({date}) => {
    const {users,token} = useAuth(); 
    const [appointments,setAppointments] = useState([]);
    const DateLocal = new Date(date).toLocaleDateString();

    useEffect(()=>{
        const url = `https://peaceful-bayou-32308.herokuapp.com/appointments?email=${users.email}&date=${DateLocal}`;
         fetch(url,{
           headers:{
             'authorization':`Bearer ${token}`
           }
         })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[DateLocal,users.email,token])
    
    return (
        <Box sx={{ml:{xs:0,sm:2}}}>
            <Typography sx={{textAlign:"start",fontSize:"20px",fontWeight:"500",pb:2,ml:2}} variant="body1" gutterBottom>
                Your Appointment History
            </Typography>
 
      <Table sx={{ minWidth:"90%"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Time</StyledTableCell>
            <StyledTableCell >Service</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {appointments?.map((row) =><AppointmentData
            key={row._id}
            data={row}
            >
            </AppointmentData>
          )}
           
        </TableBody>
      </Table>

        </Box>
    );
};

export default AppointmentInfo;