import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Styleadmin from './admin.module.css'
import doctors from '../Components/Doctors/doctors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
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


export default function CustomizedTables() {
  return (
    <div className={Styleadmin.doctorstab}>
        <h2 style={{ margin: '1rem'}}>Doctors List</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 230 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell > <h3> Doctor Name</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>ID</h3></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
        {doctors.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
                {row.name}
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right"><Button size="small">View</Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
        
      </Table>
      
    </TableContainer>
    <Button style={{margin:'1rem 5rem'}} variant="outlined" size="medium">
          View all Doctors
        </Button>
    </div>
  );
}