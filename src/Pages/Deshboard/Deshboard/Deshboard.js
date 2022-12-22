import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../../Sheared/Navbar/Navbar';
import FooterHome from '../../Home/FooterHome/FooterHome';
import LeftSideBar from '../../Sheared/DeshAndAdminBoard/LeftSideBar';

const Deshboard = () => {
    return (
        <Box>
            <Box sx={{bgcolor:"#0f0c0b"}}>
                <Navbar></Navbar>
            </Box>
           <Box>
           <Box sx={{margin:{xs:"0px",sm:"50px"},display:"flex",boxShadow: "0px 1px 3px #c4bdbd;"}}>
           <LeftSideBar sx={{zIndex:2}}></LeftSideBar>
            </Box>
           </Box>
            <Box sx={{borderTop:"1px solid #1976D2",color:"black"}}>
                <FooterHome></FooterHome>
            </Box>
        </Box>
    );
};

export default Deshboard;