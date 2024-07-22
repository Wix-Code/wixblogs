import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavBa from './NavBa'

const Nav = () => {

  const [nav, setNav] = useState(false)
  return (
    <div className='nav'>
      <div className='navbar'>
        <div className="left">
          <img src="./sport/logo.jpg" alt="" />
        </div>
        { nav ?
        <div className="cen">
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/politics'><li>Politics</li></Link>
            <Link to='/sports'><li>Sports</li></Link>
            <Link to='/business'><li>Business</li></Link>
            <Link to='/tech'><li>Tech</li></Link>
          </ul>
        </div> :
        <NavBa setNav={setNav} nav={nav}/>
        }

        <div className="right">
          <div className="button">
            <span onClick={()=>setNav(!nav)}>{nav ?<FaBars /> : <FaTimes />}</span>
          </div>
          <button>Subscribe</button>
        </div>       
      </div>
    </div>
  )
}

export default Nav