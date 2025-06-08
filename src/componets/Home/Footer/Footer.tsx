"use client"
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {/* 1st part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold '>Company</h1>
                    <ul>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>About</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Career</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Blogs</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Gifts Cards</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Magazine</li>
                    </ul>
                </div>

                {/* 2nd part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold '>Support</h1>
                    <ul>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Contact</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Legal Notice</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Privacy Policy</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Terms & Conditions</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Sitemap</li>
                    </ul>
                </div>

                {/* 3rd part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold '>Other Services</h1>
                    <ul>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Car Hire</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Activity Finder</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Tour List</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Flight Finder</li>
                        <li className='text-gray-800 font-medium mb-5 cursor-pointer text-sm hover:text-blue-950'>Travel Agents</li>
                    </ul>
                </div>

                {/* 4th part */}
                <div>
                    <h1 className='text-lg font-bold '>Contact Us</h1>
<div className='mt-6'>
    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
    <h1 className='text-base font-bold text-blue-950 mt-1'>+012 345 6788</h1>

</div>

<div className='mt-6'>
    <h1 className='text-sm text-gray-600'>Our Email</h1>
    <h1 className='text-base font-bold text-blue-950 mt-1'>example@gmail.com</h1>

</div>
                </div>

            </div>

            {/* Buttom Section */}
            <div className='mt-8 w-[80%] mx-auto border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
                <p className='text-center md:text-left'>Copyright © 2025 Company. All rights reserved</p>
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                    <span>Follow Us:</span>
                    <Link href="#" className="text-gray-500 hover:text-gray-800"><FaFacebook /></Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800"><FaInstagram /></Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800"><FaTwitter /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer