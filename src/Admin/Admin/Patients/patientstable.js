import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stylepatient from './patients.module.css'
import { Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import doctorsData from '../doctors';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
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
  name,
  id,
  age,
  gender,
  phone,
  email
) {
  return { name, id, age, gender, phone, email};
}

const rows = [
    createData('Flip Craze', 159, 35, 'male' , '+173303990', 'abc@gmail.com' ),
    createData('Backlin Toe', 237, 24, 'male', '+37721202', 'abc@gmail.com'  ),
    createData('Shane Lite', 262, 63 , 'female', '+2632901224', 'abc@gmail.com'),
    createData('Palane Hop', 305, 42 , 'male', '+729371937', 'abc@gmail.com'),
    createData('Tina Pat', 356, 20 , 'female', '+2371293749','abc@gmail.com' ),
  ];

export default function CustomizedTables() {
  const [patientData , setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
  });

  const InputHandler = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    // const newDoctor = { ...docData };
    // setDoctors([...doctors, newDoctor]); // Adding new doctor to the doctors array
    // handleClose();
  }
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState(doctorsData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectDoctor, setSelectDoctor] = React.useState('');

  const handleChange = (event) => {
    setSelectDoctor(event.target.value);
  };
  return (
    <div className={Stylepatient.patientstab}>
        
        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
      <h2 style={{ margin: '1rem'}}>Patients</h2>
        <Fab color="primary" aria-label="add" size='small' onClick={handleClickOpen}>
        <AddIcon />
        </Fab>
        <Dialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>New Patient Registration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Patient Name"
            type="text"
            variant="standard"
            value={patientData.name}
            onChange={InputHandler}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="age"
            name="age"
            label="Age"
            type="text"
            variant="standard"
            value={patientData.age}
            onChange={InputHandler}
          />
<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
<RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>

<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={patientData.email}
            onChange={InputHandler}
          />

<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="phone"
            label="Phone number"
            type="text"
            variant="standard"
            value={patientData.phone}
            onChange={InputHandler}
          />
{/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
<InputLabel id="demo-simple-select-standard-label">Select Doctor</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectDoctor}
          onChange={handleChange}
          label="Select Your Doctor"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {doctorsData.map((i)=> (
            <MenuItem value={10}>{i.name}</MenuItem>
          ))}
          
        </Select>

</FormControl> */}


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Register</Button>
        </DialogActions>
      </Dialog>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 430 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell > <h3> Patient Name</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>ID</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Age</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Gender</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Contact</h3></StyledTableCell>
            <StyledTableCell align="right"><h3>Email</h3></StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row , i) => (
            <StyledTableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" >
                {row.name}
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}