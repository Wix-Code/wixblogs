import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='foots'>
      <div className="foot">
        <div className="subscribe">
            <h1>Subscribe to our Newsletter</h1>
            <div className="sub">
              <input type="text" placeholder='Subscribe' />
              <button>Subscribe</button>
            </div>
        </div>
      </div>
      <div className="foot1">
        <div className="foot_left">
          <Link to="/"><img src="../sport/logo.jpg" alt="" /></Link>
        </div>
        <div className="quic">
          <h2>Quick Links</h2>
          <Link to="/"><p>Home</p></Link>
          <Link to="/politics"><p>politics</p></Link>
          <Link to="/business"><p>Business</p></Link>
          <Link to="/sports"><p>Sports</p></Link>
          <Link to="/tech"><p>tech</p></Link>
        </div>
        <div className="quick">
          <h2>Contacts</h2>
          <div className="con">
            <span><FaPhone /></span>
            <a href="tel:+2348126829146">+234 812 682 9146</a>
          </div>
          <div className="con">
            <span><FaPhone /></span>
            <p>Aboh Mbaise, Imo state, NIgeria</p>
          </div>
          <img src="../sport/logo.jpg" alt="" />
          <img src="../sport/logo.jpg" alt="" />
        </div>
      </div>
      <div className="foot2">
        <p>Copy right, terms and condition apply, policy and privacy.</p>
      </div>
    </div>
  )
}

export default Footer