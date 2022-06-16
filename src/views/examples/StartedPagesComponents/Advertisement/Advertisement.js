import React from 'react'
import './advertisement.css'

export default function Advertisement() {
  return (
    <div className='advertisement'>
      <h1 className='headingTextAds'>Level up your craft and career with Pttrns.s </h1>
        <div className='cardsAds'>
          <div className='cardsAdsTitle'>Quarterly plan</div>
          <h2 className='cardsAdsPrice'>$27</h2>
          <div className='cardsAdsText'>$9 per month</div>
          <div className='cardsAdsText'>$9 per month</div>
        </div>
        <div className='cardsAds'>
          <div className='cardsAdsTitle'>Quarterly plan</div>
          <h2 className='cardsAdsPrice'>$27</h2>
          <div className='cardsAdsText'>$9 per month</div>
          <div className='cardsAdsText'>$9 per month</div>
        </div>
    </div>
  )
}
