import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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

const UserSideData = ({data}) => {
    return (
         <StyledTableRow>
              <StyledTableCell sx={{padding:"10px 3px 10px 15px"}} component="th" scope="row">{data.Name}</StyledTableCell>
              <StyledTableCell sx={{padding:"10px 5px"}}>{data.number}</StyledTableCell>
              <StyledTableCell sx={{padding:"10px 5px"}}>{data.token}</StyledTableCell>
              
        </StyledTableRow>
    )
};

export default UserSideData;