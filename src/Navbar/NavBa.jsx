import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


const NavBa = ({setNav, nav}) => {
  return (
    <div className="nav_click">
      <ul>
        <Link to='/'><li onClick={()=>setNav(!nav)}>Home</li></Link>
        <Link to='/politics'><li onClick={()=>setNav(!nav)}>Politics</li></Link>
        <Link to='/sports'><li onClick={()=>setNav(!nav)}>Sports</li></Link>
        <Link to='/business'><li onClick={()=>setNav(!nav)}>Business</li></Link>
        <Link to='/tech'><li onClick={()=>setNav(!nav)}>Tech</li></Link>
      </ul>
    </div>
  )
}

export default NavBa