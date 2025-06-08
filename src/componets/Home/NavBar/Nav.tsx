'use client'
import React, { useState, useEffect } from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import { navLinks } from '../../../constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'



type Props = {
  openNav: () => void
}



const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90)
    }

    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <div className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Tripi</h1>
        </div>

        {/* Navigation Links */}
        <ul className=" items-center space-x-8 hidden md:flex">
          {navLinks.map((data) => (
  data.sublink && data.submenu ? ( // <- updated condition
    <li key={data.id}>
      {/* Dropdown Menu */}
      ...
      <ul>
        {data.submenu.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>{item.link}</Link>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <li key={data.id}>
      <Link href={data.url} className="text-white">
        {data.link}
      </Link>
    </li>
  )
))}

        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center md:px-5 md-py-2.5 py-2 px-3 text-black text-base bg-white hover:bg-gray-100 transition-all duration-200 rounded-lg">
            Book Now
          </button>
          {/* Burger Icon */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Nav
