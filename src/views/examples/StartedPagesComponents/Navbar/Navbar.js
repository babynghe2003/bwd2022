import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='startedNavbar'>
      <div className='containerNavbar'>
        <div className='servicesNavbar'>
          <a href="/auth/register" className="btn btn-primary btn-large text-lg w-inline-block">
              <div>Register</div>
          </a>
          <a href="/auth/login" className="btn btn-default btn-large text-lg w-inline-block">
            <div>Log in</div>
          </a>
        </div>
      </div>
    </div>
  )
}
