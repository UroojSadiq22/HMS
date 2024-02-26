// import './App.css';
// import Content from './Components/Doctors/content';
// import { Route, Routes } from 'react-router-dom';
// import Admin from './Admin'
// import { useState } from 'react';
// import Docdetail from './Components/Doctors/docdetail'
// import Navbar from './Components/Navbar'
// import About from './Components/About'
// import Departments from'./Components/Departments'

// import Contact from './Components/Contact'
// import Home from './Components/Home';
// import Blogs from './Components/Blogs';
// import Signin from './Components/Patients/signin';
// import Footer from './Components/Footer';

// function App() {
  
//   return (
//     <>
    
//     <Navbar />
  
//     <Routes>
   
//       <Route path='/' element={<Home/>}/>
//       <Route path="/about" element={<About />} /> 
//       <Route path="/departments" element={<Departments />} />
   
//       <Route path="/contact" element={<Contact />}/>
//       <Route path="/blogs" element={<Blogs />}/>
 
//       <Route  exact path="/doctors" element={<Content/>}/>
//       <Route path="/doctor/:id" element={<Docdetail/>} />
//       <Route path='/signin' element={<Signin/>}/>
//     </Routes>
//     <Footer/>
//     </>
    
    
//   );
// }

// export default App;
import './App.css';
import Content from './Components/Doctors/content';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation hook

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
  const location = useLocation(); // Get the current location

  // Define an array of paths where the Navbar should be hidden
  const hiddenPaths = ['/signin'];

  // Check if the current path is in the hiddenPaths array
  const hideNavbar = hiddenPaths.includes(location.pathname);

  return (
    <>
    {!hideNavbar && <Navbar />} {/* Render Navbar except for paths in hiddenPaths array */}
    <Routes>
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
