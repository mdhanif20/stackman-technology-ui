import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';


const useStyle = makeStyles({
  button:{
    backgroundColor:"#24262f",
    color:"#fff",
    padding:"4px 0px",
    "&:hover":{
      backgroundColor:"#24262f"
    }
  }
})
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

const AppointmentData = ({data}) => {
    const classes = useStyle();
    const [visited,setVisited] = useState(false)
    const determinedVisited = (id) =>{
        if(data._id===id){
            setVisited(true)
        }
        else{
            setVisited(false)
        }
    }
    return (
         <StyledTableRow>
                  <StyledTableCell sx={{padding:"10px 3px 10px 15px"}} component="th" scope="row">{data.Name}</StyledTableCell>
              <StyledTableCell sx={{padding:"10px 5px"}}>{data.time}</StyledTableCell>
              <StyledTableCell sx={{padding:"10px 5px"}}>{data.serviceName}</StyledTableCell>
              <StyledTableCell sx={{padding:0}} onClick={()=>determinedVisited(data._id)}>
                 <Button className={classes.button} >
                     {
                         visited? <span>Visited</span> : <span>Not Visited</span>
                     } 
                 </Button> 
              </StyledTableCell> 
        </StyledTableRow>
    )
};

export default AppointmentData;