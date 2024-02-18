// import React  from 'react'
// import StyleSignin from './signin.module.css'
// import { Button } from '@mui/material'
// import {motion} from 'framer-motion'
// import SigninImg from '../../Ui/signin.jpg'
// import { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import PatientDash from './patientdash'


// const Signin = () => {
//   const [patientData , setPatientData] = useState({
//     name: '',
//     patientid: '',
//     password: ''
//   })
  
//   const InputHandler = (e) =>{
//     setPatientData({...patientData, [e.target.name]: e.target.value})
  
//   }  
//   const submitHandler = (e)=>{
//     e.preventDefault();
    
//   }


//   return (
//     <>
//     <div className={StyleSignin.signincontainer}>
//     <motion.h2 
//       initial={{y: -100}}
//       animate={{y: [50,0]}}
//       transition={{duration:'1'}}
//       whileInView="visible" >
//         Patient Sign In</motion.h2>
//   <div className={StyleSignin.formimg}>
//   <div>
//       <form className={StyleSignin.form} onSubmit={submitHandler} >
//         <motion.div
//         initial={{y: -100}}
//         animate={{y: [50,0]}}
//         transition={{duration:'1'}}
//         whileInView="visible"
//         className={StyleSignin.formgroup}>
//           <label htmlFor="username">Patient Name</label>
//           <input
//             name='name'
//             type="text"
//             id="name"
//             value={patientData.name}
//             onChange={InputHandler}
//           />
//         </motion.div>
//         <motion.div
//         initial={{y: -100}}
//         animate={{y: [50,0]}}
//         transition={{duration:'1'}}
//         whileInView="visible"
//         className={StyleSignin.formgroup}>
//           <label htmlFor="username">Patient ID</label>
//           <input
//             name='patientid'
//             type='text'
//             id="patientid"
//             value={patientData.patientid}
//             onChange={InputHandler}
           
//           />
//         </motion.div>
//         <motion.div 
//         initial={{y: -100}}
//         animate={{y: [50,0]}}
//         transition={{duration:'1'}}
//         whileInView="visible"
//         className={StyleSignin.formgroup}>
//           <label htmlFor="password">Password</label>
//           <input
//             name='password'
//             type="password"
//             id="password"
//             value={patientData.password}
//             onChange={InputHandler}
          
//           />
//         </motion.div>
//         <motion.div 
//         initial={{x: 0}}
//         animate={{x: [0,100]}}
//         transition={{duration:'1'}}
//         whileInView="visible"
//         className={StyleSignin.button}>
//         <Button variant="contained" type="submit">
//                   Sign in
//                 </Button>
//         </motion.div>
        
//       </form>

//       </div>
//       <div className={StyleSignin.img}>
//       <img src={SigninImg} alt='signinimg' style={{height:'17rem', width: '20rem'}}></img>
//     </div>


//   </div>
      
      
      
//     </div>
    
//     </>
    
//   )
// }

// export default Signin

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import StyleSignin from './signin.module.css';
import SigninImg from '../../Ui/signin.jpg';
import PatientDash from './patientdash';

const Signin = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    patientid: '',
    password: ''
  });

  const [signedIn, setSignedIn] = useState(false);

  const InputHandler = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Perform any authentication logic here
    // For simplicity, let's assume authentication is successful
    // Update the state to indicate that the user has signed in
    setSignedIn(true);
  };

  return (
    <>
      {!signedIn ? (
        <div className={StyleSignin.signincontainer}>
          <motion.h2
            initial={{ y: -100 }}
            animate={{ y: [50, 0] }}
            transition={{ duration: '1' }}
            whileInView="visible"
          >
            Patient Sign In
          </motion.h2>
          <div className={StyleSignin.formimg}>
            <div>
              <form className={StyleSignin.form} onSubmit={submitHandler}>
                <motion.div
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
                </motion.div>
                <motion.div
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
                </motion.div>
                <motion.div
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
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [0, 100] }}
                  transition={{ duration: '1' }}
                  whileInView="visible"
                  className={StyleSignin.button}
                >
                  <Button variant="contained" type="submit">
                    Sign in
                  </Button>
                </motion.div>
              </form>
            </div>
            <div className={StyleSignin.img}>
              <img
                src={SigninImg}
                alt="signinimg"
                style={{ height: '17rem', width: '20rem' }}
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