'use client'
import React, { useState } from 'react'

function Navbar() {
const [isClick,SetIsClick]=useState(false)
const toggleNavbar = () =>{
    SetIsClick(!isClick)
}

  return (
<>
<nav className="">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
    <div className="flex items-center">
        <div className="flex-shrink-0">
            <img src="/logo.png" alt="" />
        </div>
    </div>
    <div className='hidden md:block'>
        <div className='ml-4 flex items-center space-x-4'>
            <a href="/" className='text-sm lg:text-lg hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            CATALOGUE</a>

            <a href="" className='text-sm lg:text-lg hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            FASHION</a>

            <a href="" className='text-sm lg:text-lg hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            FAVOURITE</a>

            <a href="" className='text-sm lg:text-lg hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            LIFESTYLE</a>
            <a href="" className=' '>
            <button className='text-sm lg:text-lg bg-black text-white px-2 lg:px-4 py-2 rounded hover:bg-gradient-to-r from-yellow-500 to-orange-500 '>SIGN UP</button></a>
        </div>
    </div>
    <div className='md:hidden flex items-center'>
        <button className='inline-flex items-center justify-center p-2 rounded-md text-black  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' onClick={toggleNavbar}>
            {isClick ? (
                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6112 12'/>
                </svg>
            ) : (
                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'/>
                </svg>
            )}
        </button>
    </div>
</div>
    </div>
    {isClick && (
        <div className="md:hidden">
            <div  className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a href="/" className=' block hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            CATALOGUE</a>

            <a href="../about#about" className=' block hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            FASHION</a>

            <a href="../services#services" className=' block hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            FAVOURITE</a>

            <a href="../contact#contact" className=' block hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white rounded-lg p-2'>
            LIFESTYLE</a>
            <a href="" className=' '>
            <button className='text-sm lg:text-lg bg-black text-white px-4 py-2 rounded hover:bg-gradient-to-r from-yellow-500 to-orange-500 '>SIGN UP</button></a>
            </div>
        </div>
    )}
</nav>


</>
  )
}

export default Navbar
