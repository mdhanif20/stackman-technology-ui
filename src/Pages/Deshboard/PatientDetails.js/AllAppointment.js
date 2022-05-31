import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import AppointmentList from './AppointmentList';
const useStyle = makeStyles({
    table:{
        width:"100%"
    }
})



const AllAppointment = () => {
  const [appoinments,setAppointments] = useState([]);
  let value = 1;
  const serialNumber = (n)=>{
      value = value+1;
  }
  useEffect(()=>{
    fetch("http://localhost:5000/deshboard/appointments")
    .then(res=>res.json())
    .then(data=> setAppointments(data))
    },[]) 
   
   
    return (
        <Box sx={{m:{xs:1,sm:2}}}>
            <Typography sx={{textAlign:"start",paddingBottom:"10px"}} variant="h6" gutterBottom component="div">
               All Appointment
            </Typography>
            
      
       <Box sx={{width:{xs:"280px",sm:"400px",md:"570px",lg:"100%"}}}>
       <div style={{
            height:"80vh",
            overflow:"scroll"
            
            }}>
            <table style={{ borderCollapse: "collapse", width:"500px",borderSpacing: "0",border:" 1px solid #ddd"}}>
                <thead style={{position:'sticky',top:'0px',color:'#fff',backgroundColor:"#0F0C0B"}}>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>No</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Name</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Date</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Email</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Phone</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Age</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Weight</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Treatment</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Handle</th>
                </thead>
                
                {
                    appoinments.map(appointment=><AppointmentList
                         key={appointment._id}
                        appointment={appointment}
                        value={value}
                        id={appointment._id}
                        >
                            {
                                appointment._id && serialNumber()
                            }
                        </AppointmentList> )
                }
               
               
            </table>
        </div>
       </Box>

        </Box>
    );
};

export default AllAppointment;