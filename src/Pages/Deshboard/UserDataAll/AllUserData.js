import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllUserDataList from './AllUserDataList';


const AllUserData = () => {
  const [allUserInfo,setAllUserInfo] = useState([]);
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
            
      
       <Box sx={{width:{xs:"280px",sm:"400px",md:"570px",lg:"100%"}}}>
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