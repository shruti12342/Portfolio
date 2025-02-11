import React from 'react'
import img1 from './Assets/profile.jpg';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navabr = () => {
  return (
    <div className='navbar'>
      <div style={{display:'flex', flexDirection:'row'}}>
      <img src={img1} alt="profile" width={50} height={50} style={{borderRadius:'50%'}} />
        <h3>Shru<span style={{color:'#FF4081', fontSize:'150%'}}>ti</span></h3>
      </div>
      <div style={{display:'flex', flexDirection:'row', gap:'2rem'}}>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/projects">Projects</Link></p>
        <p><Link to="/contact">Contact</Link></p>
      </div>
    </div>
  )
}

export default Navabr
