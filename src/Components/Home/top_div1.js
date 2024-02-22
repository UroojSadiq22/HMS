import React from 'react'
import { motion } from 'framer-motion';
import Stylehome from './home.module.css'
import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Top_div1 = () => {
    const fadeInAnimationVariants = {
        initial: {
          opacity: 0 ,
          y: 100 ,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.05,
            duration: 2,
          }
        }
      };
  return (
    <motion.div className={Stylehome.horizontal}
  variants={fadeInAnimationVariants}
  initial= 'initial'
  whileInView='animate'
  viewport={{once: true}}
  >

      <div className={Stylehome.section}>
        <h2>Departments</h2>
        <p>Explore our range of departments specializing in various medical fields.</p>
      <div>
        <label style={{margin: '10px'}}>View more</label>
        <Fab size="small" color="primary" aria-label="add">
        <ArrowForwardIcon />
        </Fab>
      </div>
      </div>

      <div className={Stylehome.section}>
        <h2>Time Table</h2>
        <p>Check out our timetable to plan your appointments and visits.</p>
      <div>
        <label style={{margin: '10px'}}>View more</label>
        <Fab size="small" color="primary" aria-label="add">
        <ArrowForwardIcon />
        </Fab>
      </div>
      </div>
      
      <div className={Stylehome.section}>
        <h2>Opening Hours</h2>
        
        <p>View our hospital's opening hours to know when we're available for your healthcare needs.</p>
        <div>
        <label style={{margin: '10px'}}>View more</label>
        <Fab size="small" color="primary" aria-label="add">
        <ArrowForwardIcon />
        </Fab>
        </div>

        
      </div>
    </motion.div>
  )
}

export default Top_div1
