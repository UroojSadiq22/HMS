import React from 'react'
import {motion} from 'framer-motion'

import Stylecover from './cover.module.css'


const Cover = () => {
  return (
    <>
    
    <div className={Stylecover.container}>

    <motion.div initial={{x: 0}}
    animate={{x: [400,0]}}
    transition={{ repeat: 0 ,duration: 3, delay:0.2}}
    className={Stylecover.text}
    >
    <h1>Welcome to our doctors page</h1>
    <h3>Extraordinary Care Is Right Here..</h3>
    </motion.div>
    <div class={Stylecover.shape}>
      <svg viewBox="0 0 2880 90" >
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    
  
  </div>
  
  
  </>
    
  )
}

export default Cover
