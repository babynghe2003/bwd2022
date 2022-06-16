import React from 'react'
import './claims.css'

export default function Claims(props) {

    const {img, title} = props
  return (
    <div className='claims'>
        <div className='ClaimsSection'>
            <div className='claimsContent'>
                <div className='claimsText'>
                    <h1 style={{color: '#111', fontSize: '60px', lineHeight: '1em', fontWeight: 800}} className='headingClaimsText'>What you get.</h1>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3">UX and UI&nbsp;patterns</h3>
                        <div className="body-copy-2">Learn and follow industry best practices that can be applied to your app to help ensure the best user experience possible.</div>
                    </div>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3">UX and UI&nbsp;patterns</h3>
                        <div className="body-copy-2">Learn and follow industry best practices that can be applied to your app to help ensure the best user experience possible.</div>
                    </div>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3">UX and UI&nbsp;patterns</h3>
                        <div className="body-copy-2">Learn and follow industry best practices that can be applied to your app to help ensure the best user experience possible.</div>
                    </div>
                    <div className="col lg-6 pb-4">
                        <h3 className="heading-3">UX and UI&nbsp;patterns</h3>
                        <div className="body-copy-2">Learn and follow industry best practices that can be applied to your app to help ensure the best user experience possible.</div>
                    </div>
                </div>
                <div className='claimsImg'>
                  <img src={img.imgSrc} alt="" className="wygScreenshot"/>
                </div>
            </div>
        </div>
    </div>
  )
}
