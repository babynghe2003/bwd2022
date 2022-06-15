import React from 'react'
import Advertisement from './StartedPagesComponents/Advertisement/Advertisement'
import Claims from './StartedPagesComponents/Claims/Claims'
import Home from './StartedPagesComponents/Home/Home'
import Inspiration from './StartedPagesComponents/Inspiration/Inspiration'
import Navbar from './StartedPagesComponents/Navbar/Navbar'
import Socials from './StartedPagesComponents/Socials/Socials'

const StartedPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
        </div>
        <Home/>
        <Socials/>
        <Claims/>
        <Inspiration/>  
        <Advertisement/>
      </div>
    </>
  )
}

export default StartedPage