import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useAuth from './../../../Hooks/useAuth';

const useStyle = makeStyles({
    input:{
        width: "100%",
        fontSize: "18px",
        padding: "12px 4px",
        borderRadius: "7px",
        border: "0px",
        marginTop:"10px",
        backgroundColor:"#E8F0FE",
    },
    submitButton:{
        fontSize: "20px",
        padding: "15px 79px",
        backgroundColor: "#0F0C0B",
        border: "0px",
        color: "#fff",
        borderRadius: "7px",
        marginTop:"15px",
        cursor:"pointer",
        fontWeight:" 500",
        width:"100%"
    }
})

  
const MakeAdmin = () => {
    const classes = useStyle();
    const [admin,setAdmin] = useState({role:"admin"});
    const {token} = useAuth();
    const handleOnBulre = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newAdmin = {...admin};
         newAdmin[field] = value;
         setAdmin(newAdmin);
         
    }

    const addAdmin = e =>{
        fetch("https://peaceful-bayou-32308.herokuapp.com/users/admin",{
            method:"PUT",
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("Added New Admin Successfully.");
                document.getElementById("adminpanel").reset();
            }
        })
        e.preventDefault()
    }

    return (
        <Box sx={{px:{xs:2,sm:1,md:10},pt:{xs:4,sm:4,md:10},textAlign:"center",width:{xs:270,sm:280,md:400}}}>
            <Typography sx={{textAlign:"start"}} variant="h6" gutterBottom component="div">
                Make Admin
            </Typography>
            <Typography component="div">
            <form id="adminpanel" onSubmit={addAdmin}>
                <input type="text" onBlur={handleOnBulre} name="displayname" className={classes.input} placeholder='Admin Name' /> <br />
                <input type="Email" onBlur={handleOnBulre} name="email" className={classes.input} placeholder='Email' /> <br />
                <input className={classes.submitButton} type="submit" value="Add Admin"/>
            </form>
            </Typography>
           
        </Box>
    );
};

export default MakeAdmin;