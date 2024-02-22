import React, { useState } from 'react'
import logo from '../../Ui/logo.png'
import StyleNav from './navbar.module.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={StyleNav.navbar}>
       <div className={StyleNav.logocontainer}>
       <img src={logo} alt='logo' className={StyleNav.logo}></img>
       </div>
        <div className={StyleNav.NavbarMenu}>
          <ul>
          <li className={StyleNav.NavbarMenuList}><Link to='/admin'>Admin</Link></li>
            <li className={StyleNav.NavbarMenuList}><Link to='/'>Home</Link></li>
            <li className={StyleNav.NavbarMenuList}><Link to='/about'>About Us</Link></li>
            {/* <li className={StyleNav.NavbarMenuList}><Link to='/services'>Departments</Link></li> */}
     {/* <li> */}
      {/* <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
         endIcon={<KeyboardArrowDownIcon />}
      >
        Departments
      </Button> */}
      {/* <Link onClick={handleClick} to='/services'>Departments</Link>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>profilr</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </li>        */}
      <li>
            <div
              aria-controls="fade-menu"
              aria-haspopup="true"
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
              className={StyleNav.NavbarMenuList}
            >
              <Link to='/services'>Departments</Link>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
                onMouseEnter={handleMenuOpen}
                onMouseLeave={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </div>
          </li>
      


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
