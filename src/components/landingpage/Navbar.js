import React, { useState } from 'react'
import '../../styles/navbar.css'
import logo from '../../images/logo-brand.png' 
import {LinkButton} from '../LinkButton'
import { NavItems } from './NavItems'
//from fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false) 

  const changeBackground = () => {
    if (window.scrollY >= 200) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
}
window.addEventListener('scroll', changeBackground)

  return (
    <nav className='navbar active navbar-expand-lg fixed-top navbar-light active'>
    <a className="navbar-brand" href="#"><img className="logo-brand mr-3" src={logo} /> MATH GRELLIC</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <FontAwesomeIcon icon={faBars} style={{color:"#374785"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        { NavItems.map((item) => {
          return (
              <LinkButton>{ item.title }</LinkButton>
          )
        })}
          <li className="nav-item active">
             <button type="button" className="btn btn-primary btn-enrol-here btn-nav">LOG IN</button>
          </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar

