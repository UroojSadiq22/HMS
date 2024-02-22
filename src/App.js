import './App.css';
import Content from './Components/Doctors/content';
import { Route, Routes } from 'react-router-dom';
import Admin from './Admin'

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
  return (
    <>
    
    <Navbar/>
  
    <Routes>
    <Route path='/admin' element={<Admin/>}/>
      <Route path='/' element={<Home/>}/>
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
