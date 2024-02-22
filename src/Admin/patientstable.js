import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styleadmin from './admin.module.css'

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

function createData(
    name: string,
    ID: number,
    Date: number,
    Contact: number,
    Email: number,
    Doctor: String,
    Timing: number,
  
  ) {
    return { name, ID, Date, Contact, Email , Doctor ,Timing};
  }

const rows = [
    createData('Flip Craze', 159, 6-10-24, '+173303990', 'abc@gmail.com' , 'Dr. Flix Tom' , '9:00am'),
    createData('Backlin Toe', 237, 9-10-24, '+37721202', 'abc@gmail.com' , 'Dr. Flix Tom' ,'9:00am'),
    createData('Shane Lite', 262, 16.-10-24, '+2632901224', 'abc@gmail.com' , 'Dr. Flix Tom' , '9:00am'),
    createData('Palane Hop', 305, 3-7-24, '+729371937', 'abc@gmail.com' , 'Dr. Flix Tom' , '9:00am'),
    createData('Tina Pat', 356, 16-10-24, '+2371293749','abc@gmail.com' , 'Dr. Flix Tom' , '9:00am'),
  ];

export default function CustomizedTables() {
  return (
    <div className={Styleadmin.patientstab}>
        <h2 style={{ margin: '1rem'}}>Appointments</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 430 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell > <h3> Patient Name</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>ID</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Date</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Contact</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Email</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Doctor</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Timing</h3></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
                {row.name}
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.ID}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Contact}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.Doctor}</StyledTableCell>
              <StyledTableCell align="right">{row.Timing}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}