import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../../Sheared/Navbar/Navbar';
import FooterHome from '../../Home/FooterHome/FooterHome';
import LeftSideBar from '../../Sheared/DeshAndAdminBoard/LeftSideBar';
import ClientInfo from './ClientInfo/ClientInfo';


const Deshboard = () => {
    return (
        <Box>
            <Box sx={{bgcolor:"#0f0c0b"}}>
                <Navbar></Navbar>
            </Box>
           <Box>
           <Box sx={{margin:{xs:"0px",sm:"50px"},display:"flex",boxShadow: "0px 1px 3px #c4bdbd;"}}>
                <Box sx={{}}>
                    <LeftSideBar></LeftSideBar>
                </Box>
                <Box>
                <ClientInfo></ClientInfo>
                </Box>
            </Box>
           </Box>
            <Box sx={{bgcolor:"#0f0c0b",boxShadow: "1px 12px 12px 14px #b4acac",color:"#fff"}}>
                <FooterHome></FooterHome>
            </Box>
        </Box>
    );
};

export default Deshboard;