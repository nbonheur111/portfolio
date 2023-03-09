import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-links'>
      <div className='name'>
      <Link to='/home'>Bonheur Ndayishimiye</Link>
      </div>

      <div className='links'>
     
        <Link to="/About" >About</Link>
        &nbsp; | &nbsp;
      <Link to="/project" >projects</Link>
        &nbsp; | &nbsp;
        <Link to="/resume" >Resume</Link>
       
      </div>
    </div>
    Hi

    </nav>
    
  )
}

export default Navbar