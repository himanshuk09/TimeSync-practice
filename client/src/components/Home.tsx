import React from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='home-page'>
         <div className='images-block slideshow-container' >
         </div>
         <Outlet/>
    </div>
  )
}
