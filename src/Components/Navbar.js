import React from 'react'
import img1 from './Assets/portfoliopic.png';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navabr = () => {
  return (
    <div className='navbar'>
      <div style={{display:'flex', flexDirection:'row'}}>
      <img src={img1} alt="profile" width={50} height={50} style={{borderRadius:'50%', background:'#31a7b2'}} />
        <h3>Port<span >folio</span></h3>
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
