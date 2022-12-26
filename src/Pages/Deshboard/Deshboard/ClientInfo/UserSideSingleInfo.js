import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import useAuth from '../../../Hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import UserSideData from './UserSideData';
import Button from '@mui/material/Button';
import { jsPDF } from 'jspdf';
import { renderToString } from "react-dom/server";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  

const UserSideSingleInfo = ({date}) => {
    const {users,token} = useAuth(); 
    const [takenData,setTakenData] = useState([]);
    const DateLocal = new Date(date).toLocaleDateString();
    
    const handleDownload = (infos) =>{
      const doc = new jsPDF()
      for(let i=0; i < infos.length; i++){
        console.log(i)
        const info = infos[i];
        const name = info.Name;
        const number = info.number;
        const token = info.token;
        let htmlElement = `
        Name: ${name}
        Phone No: ${number}
        Token No: ${token}
        `
        doc.text(5,5,renderToString(htmlElement))
        doc.addPage()
      }
      doc.save(`${infos[0].Name}'s Data.pdf`)
    }

    useEffect(()=>{
        const url = `https://stackman-server.onrender.com/singleUserInfo?email=${users.email}&date=${DateLocal}`;
         fetch(url)
        .then(res => res.json())
        .then(data => setTakenData(data))
    },[DateLocal,users.email,token])
    

    return (
        <Box sx={{ml:{xs:0,sm:2}}}>
            <Typography sx={{textAlign:"start",fontSize:"20px",fontWeight:"500",pb:2,marginLeft:"15px"}} variant="body1" gutterBottom>
                  User Side Data
            </Typography>
            <Box sx={{display:"flex",alignItems:"start"}}>
            <Button style={{backgroundColor:"#1976D2",color:"#fff",fontSize:"16px",padding:"5px 10px",marginBottom:"10px"}} onClick={()=>handleDownload(takenData)}>Generate PDF</Button>
          </Box>
           
      <Table sx={{ minWidth:"90%"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Phone No</StyledTableCell>
            <StyledTableCell >Token No</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {takenData?.map((row) =><UserSideData
            key={row._id}
            data={row}
            >
            </UserSideData>
          )}
           
        </TableBody>
      </Table>
        </Box>
    );
};

export default UserSideSingleInfo;