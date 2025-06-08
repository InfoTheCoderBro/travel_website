"use client"
import React from 'react'
import Link from 'next/link';

import { CgClose } from 'react-icons/cg';
import { navLinks } from '@/constant/constant';

type Props = {
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({showNav, closeNav}:Props) => {
const navOpen = showNav?"translate-x-0":"translate-x-[-100%]"

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full`}></div>

      {/* NavLinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {navLinks.map((item) => {
            return (<Link href={item.url} key={item.id}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-whie sm:text-[30px]">
                {item.link}
              </p>
            </Link>);
          })}

        {/* Close button */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
      </div>
    </div>
  )
}

export default MobileNav