
import Advertisement from './StartedPagesComponents/Advertisement/Advertisement'
import Claims from './StartedPagesComponents/Claims/Claims'
import Home from './StartedPagesComponents/Home/Home'
import Inspiration from './StartedPagesComponents/Inspiration/Inspiration'
import Navbar from './StartedPagesComponents/Navbar/Navbar'
import Socials from './StartedPagesComponents/Socials/Socials'

import React, { useEffect, useState } from 'react'

const StartedPage = (props) => {
   
  return (
    <>
     
      <div>
        <div>
          <Navbar/>
        </div>
        <Home
          mainImg={{
            innerLink: "/admin/index",
            imgSrc: require("../../assets/img/home/main.png").default,
            imgAlt: "...",
          }}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../../assets/img/brand/logo.png").default,
            imgAlt: "...",
          }}
        />
        <Socials/>
        <Claims
          img={{
            innerLink: "/admin/index",
            imgSrc: require("../../assets/img/home/thumbnail.png").default,
            imgAlt: "...",

          }}
        />
        <Inspiration/>  
        <Advertisement/>
      </div>
    </>
  )
}

export default StartedPage