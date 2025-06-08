'use client'
import React, { useState, useEffect } from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import { navLinks } from '../../../constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { IoCallOutline } from "react-icons/io5";
import { FaChevronDown } from 'react-icons/fa'

type Props = {
  openNav: () => void
}

type NavLink =
  | {
      id: number;
      url: string;
      sublink: false;
      link: string;
    }
  | {
      id: number;
      url: string;
      sublink: true;
      link: string;
      submenu: { id: number; link: string; url: string }[];
    };

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
            data.sublink ? (
              <li key={data.id}>
                <div className="group relative inline-block" tabIndex={0}>
                  <button
                    className="text-white flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label={`${data.link} menu`}
                  >
                    {data.link}
                    <FaChevronDown className="group-hover:rotate-180 transition-all" aria-hidden="true" />
                  </button>

                  <div className="absolute flex left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-300 ease-in-out bg-white text-gray-800 p-4 rounded-lg w-max min-w-[10rem] z-50">
                    <ul className="flex flex-col gap-2 text-sm" role="menu">
                      {Array.isArray((data as any).submenu) &&
                        (data as any).submenu.map((item: any) => (
                          <li key={item.id} role="menuitem">
                            <Link href={item.url} className="block w-full px-4 py-2 hover:bg-gray-100 rounded">
                              {item.link}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
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
