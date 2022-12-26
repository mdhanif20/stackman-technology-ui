import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllUserDataList from './AllUserDataList';
import ReactPrint from "react-to-print";
import Button from '@mui/material/Button';
import {useRef} from "react";

const AllUserData = () => {
  const [allUserInfo,setAllUserInfo] = useState([]);
  const ref = useRef();
  let value = 1;
  const serialNumber = (n)=>{
      value = value+1;
  }
  useEffect(()=>{
    fetch("https://stackman-server.onrender.com/userInfo")
    .then(res=>res.json())
    .then(data=> setAllUserInfo(data))
    },[]) 
   
   
    return (
        <Box sx={{m:{xs:1,sm:2}}}>
            <Typography sx={{textAlign:"start",paddingBottom:"10px"}} variant="h6" gutterBottom component="div">
               All User Side Data
            </Typography>
            <Box sx={{display:"flex",alignItems:"start"}}>
            <ReactPrint trigger={()=><Button style={{color:"#fff",backgroundColor:"#1976D2",marginBottom:"20px",fontSize:"16px",padding:"5px 10px 5px 10px"}}>GENERATE PDF</Button>} content={()=>ref.current}/>
          </Box>
      
       <Box sx={{width:{xs:"280px",sm:"400px",md:"100%",lg:"100%"}}}>
       <div style={{
            height:"80vh",
            overflow:"scroll"
            }}>
            <table ref={ref} style={{ borderCollapse: "collapse", width:"500px",borderSpacing: "0",border:" 1px solid #ddd"}}>
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