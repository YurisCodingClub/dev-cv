import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img className='imagelogo' src="./images/logo.svg" alt="logo" />
        </div>
        <div className="name">
          <h2>Name</h2>
        </div>
      </nav>
    </div>
  )
}

export default Header