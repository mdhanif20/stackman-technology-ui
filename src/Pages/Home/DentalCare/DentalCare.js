import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import image from "../../../images/cardiacCare.png";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    image:{
        width:"100%",
        height:"100%"
    },
    button:{
        margin:"20px 0px",
        backgroundColor:"#3bc5c5",
        '&:hover':{
            backgroundColor:"#3bc5c5"
        }
    }
})

const DentalCare = () => {
    const classes = useStyle();
    return (
        <Container sx={{pb:{xs:8,md:12}}}>
            <Grid container>
                <Grid xs={12} md={4}>
                    <img className={classes.image} src={image} alt="" />
                </Grid>
                <Grid xs={12} md={8} sx={{textAlign:"start", pl:{xs:0,md:4},py:3}}>
                <Typography variant="h4" sx={{fontWeight: 'medium',py:2}} gutterBottom component="div">
                    Experimental Cardiac <br /> care, on Your terms.
                </Typography>
                <Typography sx={{pb:2}} variant="body1" gutterBottom>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem omnis laborum eveniet fugit dolor perferendis et non voluptas totam? Ea, necessitatibus voluptatem unde libero quia sint similique quaerat commodi! At nam magni optio quidem labore id nesciunt modi culpa odit pariatur autem, reiciendis, quos eum? Excepturi amet quibusdam nesciunt.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem omnis laborum eveniet fugit dolor perferendis et non voluptas totam? Ea, necessitatibus voluptatem unde libero quia sint similique quaerat commodi! At nam magni optio quidem labore id nesciunt modi culpa odit pariatur autem, reiciendis, quos eum? Excepturi amet quibusdam nesciunt.
                </Typography>
                <Button className={classes.button} variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DentalCare;