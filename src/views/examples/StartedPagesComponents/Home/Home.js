import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/61420382017a28d8781ba236_hero-illustration%402x.png" srcSet="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/61420382017a28d8781ba236_hero-illustration%402x-p-500.png 500w, https://assets-global.website-files.com/5fce901dab92e15349a36fb7/61420382017a28d8781ba236_hero-illustration%402x.png 1868w" sizes="(max-width: 991px) 100vw, 60vw" width="934" alt="" className="hero-illustration"></img>
        <div className='contentSection'>
            <div className='content'>
                <img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/605f093934d3b8754db96697_logo.svg" loading="lazy" alt="" className="heroLogo"/>
                <h1 className='titleSection'>Stay ahead of the curve and become a better
                    <span className="textSpan"> interface designer.</span>
                    <br/>
                </h1>
                <p className='textSection'>
                    With a
                    <strong> Pttrns </strong>
                    membership, gain access to thousands of curated mobile design patterns, get online advice, and connect with other designers from all over the world.
                </p>
            </div>
        </div>
        
    </div>
  )
}
