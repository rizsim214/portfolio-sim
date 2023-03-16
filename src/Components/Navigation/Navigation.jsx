import React from 'react'

const Navigation = () => {
  return (
    <>
      <nav className='nav-wrapper'>
        <a href="/" className="nav-brand">Portfolio</a>
        <ul className="nav-list">
          <li className='nav-item'><a href="/" className="nav-link">Home</a></li>
          <li className='nav-item'><a href="/" className="nav-link">About</a></li>
          <li className='nav-item'><a href="/" className="nav-link">Works</a></li>
          <li className='nav-item'><a href="/" className="nav-link">Testimonials</a></li>
          <li className='nav-item'><a href="/" className="nav-link">Contact</a></li> 
        </ul>
      </nav>
    </>
  )
}

export default Navigation