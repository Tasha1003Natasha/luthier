import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
 <nav className={s.nav}>
    <a href='/work' className={s.nav_link}>Work</a>
    <a href='/' className={s.nav_link}>Logo</a> 
    <a href='/profile' className={s.nav_link}>Profile</a>
 </nav>
  )
}

export default Navbar;

