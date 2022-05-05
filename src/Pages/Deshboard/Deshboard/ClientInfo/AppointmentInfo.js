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
  

const AppointmentInfo = ({email}) => {
    const {users} = useAuth(); 
    const [appointments,setAppointments] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/appointments?email=${users.email}`;
        console.log(url) 
         fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[users])
    


    console.log(appointments)
    
    return (
        <Box>
            <Typography sx={{textAlign:"start",fontSize:"20px"}} variant="body1" gutterBottom>
                Your Appointment History
            </Typography>
      {/* <TableContainer component={Paper}>  */}
      <Table sx={{ minWidth:{xs:"100%",sm:500}}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Time</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.Name}</StyledTableCell>
              <StyledTableCell >{row.time}</StyledTableCell>
              <StyledTableCell >{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    {/* </TableContainer>  */}
        </Box>
    );
};

export default AppointmentInfo;