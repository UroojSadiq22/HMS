import React from 'react'
import Stylehome from './home.module.css'
import Image1 from '../../Ui/sliderImg1.jpg'
import { motion } from 'framer-motion'

const Treat_div1 = () => {
  
  return (
    <div className={Stylehome.abouttreatment}>
      {/* Image side */}
      <motion.div className={Stylehome.treatmentimg}
      variants={{initial: {
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
      }}}
      initial='initial'
      whileInView= 'animate'
      viewport={{once: true}}>
        <img src={Image1} alt="Hospital" style={{ width: '100%', height: 'auto' }} />
      </motion.div>
      
      {/* Description side */}
      <motion.div className={Stylehome.treatmentdesc}
      variants={{initial: {
        opacity: 0 ,
        x: 100 ,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.05,
          duration: 2,
        }
      }}}
      initial='initial'
      whileInView= 'animate'
      viewport={{once: true}}
      >
        <h2>Hospital Treatment</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
          sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla.
        </p>
      </motion.div>
    </div>
  )
}

export default Treat_div1
