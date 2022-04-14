import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import chair from "../../../images/chair.png";
import { makeStyles } from '@material-ui/core/styles';
import Calendar from '../../Sheared/Calendar/Calendar';


const useStyle = makeStyles({
    chair:{
        width:"100%"
    }
})

const AppointmentHeader = ({ date,setDate }) => {
    const classes = useStyle();

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className={classes.chair} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;