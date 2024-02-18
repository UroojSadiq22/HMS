import React from 'react'
import logo from '../../Ui/logo.png'
import StyleNav from './navbar.module.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <nav className={StyleNav.navbar}>
       <div className={StyleNav.logocontainer}>
       <img src={logo} alt='logo' className={StyleNav.logo}></img>
       </div>
        <div className={StyleNav.NavbarMenu}>
          <ul>
            <li className={StyleNav.NavbarMenuList}><Link to='/'>Home</Link></li>
            <li className={StyleNav.NavbarMenuList}><Link to='/about'>About Us</Link></li>
            <li className={StyleNav.NavbarMenuList}><Link to='/services'>Departments</Link></li>
            
            <li className={StyleNav.NavbarMenuList}><Link to='/doctors'>Doctors</Link></li>
            <li className={StyleNav.NavbarMenuList}><Link to='/blogs'>Blogs</Link></li>
            <li className={StyleNav.NavbarMenuList}><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        <div className={StyleNav.button}>
          <Link to='/signin'>
          <Button variant="contained" href="#contained-buttons">
          Sign in
        </Button>
          </Link>
       
        </div>

    </nav>
  )
}

export default Navbar
