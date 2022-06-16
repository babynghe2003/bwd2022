import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='startedNavbar'>
      <div className='containerNavbar'>
        <div className='servicesNavbar'>
          <a href="https://pttrns.outseta.com/auth?widgetMode=register&amp;planUid=496rkZ9X&amp;planPaymentTerm=month&amp;skipPlanOptions=true#o-anonymous" className="btn btn-primary btn-large w-inline-block">
              <div>Start 3-day free trial</div>
          </a>
          <a href="https://pttrns.outseta.com/auth?widgetMode=login#o-anonymous" className="btn btn-default btn-large w-inline-block"></a>
          <a href="/auth/login" className="btn btn-default btn-large w-inline-block">
            <div>Log in</div>
          </a>
        </div>
      </div>
    </div>
  )
}
