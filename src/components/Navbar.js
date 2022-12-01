import React from 'react'
import logoweather from './logoweather.jpg'

function Navbar() {
  return (
    <div className='bg-transparent text-white border-b-2 border-white rounded-md p-2 shadow-xl flex justify-between'>
        <span className='text-2xl font-mono flex items-center'>WhatTheWeather.Com</span>
        <img src={logoweather} alt="weather logo" className='h-14 rounded-full'/>

    </div>
  )
}

export default Navbar