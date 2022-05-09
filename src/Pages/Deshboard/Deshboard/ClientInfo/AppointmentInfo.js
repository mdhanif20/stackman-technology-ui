import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import useAuth from './../../../Hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'; 
import Button from '@mui/material/Button';
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
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  })); 
  

const AppointmentInfo = ({date}) => {
    const {users} = useAuth(); 
    const [appointments,setAppointments] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/appointments?email=${users.email}&date=${date}`;
         fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[date])
    
    return (
        <Box sx={{ml:{xs:0,sm:2}}}>
            <Typography sx={{textAlign:"start",fontSize:"20px",fontWeight:"500",pb:2,ml:2}} variant="body1" gutterBottom>
                Your Appointment History
            </Typography>
      {/* <TableContainer component={Paper}>  */}
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
    {/* </TableContainer>  */}
        </Box>
    );
};

export default AppointmentInfo;