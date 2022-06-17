import React from 'react'
import Login from 'views/examples/Login'
import Register from 'views/examples/Register'
import { useState } from "react"
import "./navbar.css"

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleToggle2 = () => {
    setToggle2(!toggle2)
  }
  return (
    <>
    {
      toggle ? 
      <div style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '999',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div onClick={handleToggle} style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
      }}></div>
      <Login/>
      </div> : ""
    }
    {
      toggle2 ? 
      <div style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '999',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div onClick={handleToggle2} style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
      }}></div>
      <Register/>
      </div> : ""
    }
    <div className='startedNavbar'>
      <div className='containerNavbar'>
        <div className='servicesNavbar'>
          <button onClick={handleToggle2} className="btn btn-primary btn-large text-lg w-inline-block">
              <div>Register</div>
          </button>
          <button onClick={handleToggle} className="btn btn-default btn-large text-lg w-inline-block">
            <div>Log in</div>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
