import './App.css';
import Content from './Components/Doctors/content';
import { Route, Routes } from 'react-router-dom';
import Admin from './Admin'
import { useState } from 'react';
import Docdetail from './Components/Doctors/docdetail'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Departments from'./Components/Departments'

import Contact from './Components/Contact'
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Signin from './Components/Patients/signin';
import Footer from './Components/Footer';

function App() {
  const [patients, setPatients] = useState([]); // State to hold patient data

  const handleAppointmentBooking = (newPatient) => {
    setPatients([...patients, newPatient]); // Update patient data
  };
  return (
    <>
    
    <Navbar/>
  
    <Routes>
    <Route path='/admin' element={<Admin patients={patients} />}/>
      <Route path='/' element={<Home onAppointmentBook={handleAppointmentBooking}/>}/>
      <Route path="/about" element={<About />} /> 
      <Route path="/departments" element={<Departments />} />
   
      <Route path="/contact" element={<Contact />}/>
      <Route path="/blogs" element={<Blogs />}/>
 
      <Route  exact path="/doctors" element={<Content/>}/>
      <Route path="/doctor/:id" element={<Docdetail/>} />
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
    <Footer/>
    </>
    
    
  );
}

export default App;
