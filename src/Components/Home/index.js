import React , { useState , useEffect } from 'react'
import Stylehome from './home.module.css'

import Image2 from '../../Ui/sliderImg2.jpg'
import Image3 from '../../Ui/sliderImg3.jpg'
import Image4 from '../../Ui/sliderImg4.jpeg'
import Image5 from '../../Ui/sliderImg5.jpg'
import BackM from '../../Ui/mission.jpg'
import {motion} from 'framer-motion'
import Fab from '@mui/material/Fab';

import { Box , Button} from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TopDiv1 from './top_div1'
import TreatDiv2 from './treat_div2'
import MissionDiv3 from './mission_div3'
import { Link } from 'react-router-dom'


const Home = ({onAppointmentBook}) => {
  const handleAppointmentBook = (newPatient) => {
    // Pass newly booked patient to parent component
    onAppointmentBook(newPatient);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 300) { // Change 300 to whatever scroll position you prefer
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array as dependency to run only once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  

  // const images = [Image1 , Image2 , Image3 , Image4 , Image5]
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Increment index to move to the next image
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000); // Change slide every 3 seconds

  //   // Clean up the interval to prevent memory leaks
  //   return () => clearInterval(intervalId);
  // }, [images]);
  

  return (
    // <div className={Stylehome.slidercontainer}>
    //   {images.map((image, index) => (
    //     <div key={index} className={index === currentImageIndex ? Stylehome.active : Stylehome.slide}>
    //       <img src={image} alt='images' />
    //     </div>
    //   ))}
    // </div>
    <>
    
    <div className={Stylehome.container}>

    <motion.div initial={{x: 0}}
    animate={{x: [400,0]}}
    transition={{ repeat: 0 ,duration: 3, delay:0.2}}
    className={Stylehome.text}
    >
    <h1>All Specialities Under One Roof!</h1>
    <h3>Quality Health Care Here And Now..</h3>
    </motion.div>
    <div class={Stylehome.shape}>
      <svg viewBox="0 0 2880 90" >
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
    </div>
    </div>

  <TopDiv1 onAppointmentBook={handleAppointmentBook}/>
  
  <TreatDiv2/>

  <MissionDiv3/>

  <div className={Stylehome.getintouch}>
    <h1>Have Questions? Get In Touch!</h1>
    <h3>To Find Best Doctors</h3>
    <p>Great doctor if you need your family member to get immediate assistance, emergency treatment or a simple consultation.</p>
    
    <Link to='./contact'>
    <Button variant="contained" endIcon={<LocalPhoneIcon />}>
      Contact Us
    </Button>
    </Link>
    
  </div>

  <div>
      {isVisible &&
        <Fab size="small" 
        color="primary" 
        aria-label="add" 
        onClick={scrollToTop} 
        style={{position: 'fixed', bottom: 20, right: 20}}>
        <ArrowUpwardIcon />
        </Fab>}
  </div>
  
  
</>
  )
}

export default Home
