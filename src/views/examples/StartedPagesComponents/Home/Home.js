import React from 'react'

import './home.css'

export default function Home(props) {
    const {mainImg,logo} = props


  return (
    <div className='home'>
        <img src={mainImg.imgSrc}  alt="" className="hero-illustration"></img>
        <div className='contentSection'>
            <div className='content'>
                <img src={logo.imgSrc} loading="lazy" alt="" className="heroLogo"/>
                <h1 className='titleSection'>The voice for 
                    <span className="textSpan"> relationships </span>
                    and
                    <span className="textSpan"> sex education</span>
                    <br/>
                </h1>
                <p className='textSection'>
                    Working  
                    <strong> together </strong>
                    for quality relationships and sex education
                </p>
            </div>
        </div>
        
    </div>
  )
}
