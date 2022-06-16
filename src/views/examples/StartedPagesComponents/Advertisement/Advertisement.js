import React from 'react'
import './advertisement.css'

export default function Advertisement() {
  return (
    <div className='advertisement'>
        
      <h1 className='headingTextAds row'>Our Team </h1>
        <div className='row'>
        <div className='cardsAds bg-gradient-info'>
        <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/286738580_1437477316714501_2845860831514181787_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aRM35rBvgTQAX8iLLO-&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9Nkf7cmaTw6An2PNHie_70jEtdOJVFfi1xy2brt001CA&oe=62AFB29D" loading="lazy" alt="" class="studioIllustration"/>
          <h2 className='cardsAdsPrice'>Ho Minh Phi</h2>
          <div className='cardsAdsText'>21IT1</div>
          <div className='cardsAdsText'>21IT634</div>
        </div>
        <div className='cardsAds bg-gradient-info'>
        <img src="https://avatars.githubusercontent.com/u/93462156?v=4" loading="lazy" alt="" class="studioIllustration"/>
          <h2 className='cardsAdsPrice'>Le Thanh Dat</h2>
          <div className='cardsAdsText'>21IT1</div>
          <div className='cardsAdsText'>$9 per month</div>
        </div>
        <div className='cardsAds bg-gradient-info'>
        <img src="https://lh3.googleusercontent.com/XgLbOslAvQUlEVkMQhkdYwjYcPkNdygum1yHDfZ5k3Euz1-ZROzupm7Asbi4gUyzGwFukSnTHGeXrBu07IY=w1704-h965"  loading="lazy" alt="" class="studioIllustration"/> 
          <h2 className='cardsAdsPrice'>Nguyen Huu Thuc</h2>
          <div className='cardsAdsText'>21IT1</div>
          <div className='cardsAdsText'>$9 per month</div>
        </div>
        </div>
    </div>
  )
}
