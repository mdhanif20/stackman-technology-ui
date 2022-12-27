import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllUserDataList from './AllUserDataList';
import Button from '@mui/material/Button';
import { jsPDF } from 'jspdf';
import { renderToString } from "react-dom/server";
import Calendar from './../../Sheared/Calendar/Calendar';

const AllUserData = () => {
  const [allUserInfo,setAllUserInfo] = useState([]);
  const [date,setDate] = useState(new Date());
  const DateLocal = new Date(date).toLocaleDateString();

  let value = 1;
  const serialNumber = (n)=>{
      value = value+1;
  }

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
    doc.save(`All User Data.pdf`)
  }

  useEffect(()=>{
    fetch(`https://stackman-server.onrender.com/userInfo?date=${DateLocal}`)
    .then(res=>res.json())
    .then(data=> setAllUserInfo(data))
    },[date]) 

    return (
        <Box sx={{m:{xs:1,sm:2}}}>
            <Typography sx={{textAlign:"start",paddingBottom:"10px"}} variant="h6" gutterBottom component="div">
               All User Side Data
            </Typography>
            <Box>
                <Calendar
                date = {date}
                setDate = {setDate}
                >
                </Calendar>
            </Box>
            <Box sx={{display:"flex",alignItems:"start"}}>
            <Button style={{backgroundColor:"#1976D2",color:"#fff",fontSize:"16px",padding:"5px 10px",marginBottom:"10px"}} onClick={()=>handleDownload(allUserInfo)}>Generate PDF</Button> </Box>
      
       <Box sx={{width:{xs:"280px",sm:"400px",md:"100%",lg:"100%"}}}>
       <div style={{
            height:"80vh",
            overflow:"scroll"
            }}>
            <table style={{ borderCollapse: "collapse", width:"500px",borderSpacing: "0",border:" 1px solid #ddd"}}>
                <thead style={{position:'sticky',top:'0px',color:'#fff',backgroundColor:"#0F0C0B"}}>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>No</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Name</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Number</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Token</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>Date</th>
                <th style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",fontWeight:"500"}}>email</th>
                </thead>
                
                {
                    allUserInfo.map(info=><AllUserDataList
                         key={info._id}
                        singleInfo={info}
                        value={value}
                        id={info._id}
                        >
                            {
                                info._id && serialNumber()
                            }
                        </AllUserDataList> )
                }
               
               
            </table>
        </div>
       </Box>

        </Box>
    );
};

export default AllUserData;