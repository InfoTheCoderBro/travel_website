'use client'
import React from 'react'
import NavBar from './Nav'
import MobileNav from './MobileNav'
import { useState } from 'react'

const ResponsiveNav = () => {
const [showNav, setShowNav] = useState(false)
const handNavShow = ()=> setShowNav(true);
const handleCloseNav = () => setShowNav(false);

  return (
    <div>
        <NavBar openNav={handNavShow}/>
        <MobileNav showNav ={showNav} closeNav={handleCloseNav} />
    </div>
  )
}

export default ResponsiveNav