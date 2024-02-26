import React, { useState } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import StyleSignin from './signin.module.css';
import SigninImg from '../../Ui/signin.jpg';
import PatientDash from './patientdash';
import { TextField }from '@mui/material';
import { Link } from 'react-router-dom';


const Signin = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    patientid: '',
    email: '',
    password: ''
  });

  const [signedIn, setSignedIn] = useState(false);

  const InputHandler = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSignedIn(true);

  };

  return (
    <>
      {!signedIn ? (
        <div className={StyleSignin.signincontainer}>
          
          <div className={StyleSignin.formimg}>
            <div>
            <motion.h1
            initial={{ x: -100 }}
            animate={{ x: [70, 0] }}
            transition={{ duration: '1' }}
            whileInView="visible"
          >
            Patient Sign In
          </motion.h1>
              <form className={StyleSignin.form} onSubmit={submitHandler}>
                {/* <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: [50, 0] }}
                  transition={{ duration: '1' }}
                  whileInView="visible"
                  className={StyleSignin.formgroup}
                >
                  <label htmlFor="username">Patient Name</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={patientData.name}
                    onChange={InputHandler}
                 
                  />

                  
                </motion.div> */}

                <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Patient Name"
            type="text"
            fullWidth
            variant="standard"
            value={patientData.name}
            onChange={InputHandler}
          />
                {/* <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: [50, 0] }}
                  transition={{ duration: '1' }}
                  whileInView="visible"
                  className={StyleSignin.formgroup}
                >
                  <label htmlFor="username">Patient ID</label>
                  <input
                    name="patientid"
                    type="text"
                    id="patientid"
                    value={patientData.patientid}
                    onChange={InputHandler}
                    
                  />
                </motion.div> */}

                <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="patientid"
            label="Patient Id"
            type="text"
            fullWidth
            variant="standard"
            value={patientData.patientid}
            onChange={InputHandler}
          />
                {/* <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: [50, 0] }}
                  transition={{ duration: '1' }}
                  whileInView="visible"
                  className={StyleSignin.formgroup}
                >
                  <label htmlFor="username">Email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={patientData.email}
                    onChange={InputHandler}
                    
                  />
                </motion.div> */}

                <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            variant="standard"
            value={patientData.email}
            onChange={InputHandler}
          />
                {/* <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: [50, 0] }}
                  transition={{ duration: '1' }}
                  whileInView="visible"
                  className={StyleSignin.formgroup}
                >
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    value={patientData.password}
                    onChange={InputHandler}
                    
                  />
                  
                </motion.div> */}

<TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={patientData.password}
            onChange={InputHandler}
          />
          <div style={{display: 'flex' , justifyContent: 'space-between' , gap: '5rem'}}>
          
                <div className={StyleSignin.button} >
                  <Link to='/'>
                  <Button variant="outlined" type="submit">
                    Back to Home
                  </Button>
                  </Link>
                  
                </div>
                <div className={StyleSignin.button} >
                  <Button variant="contained" type="submit">
                    Sign in
                  </Button>
                </div>

          </div>
                
              </form>
            </div>
            <div className={StyleSignin.img}>
              <img
                src={SigninImg}
                alt="signinimg"
                style={{ height: '28rem', width: '27rem' }}
              ></img>
            </div>
          </div>
        </div>
      ) : (
        <PatientDash />
      )}
    </>
  );
};

export default Signin;