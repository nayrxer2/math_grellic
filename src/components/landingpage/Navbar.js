import React, { useState } from 'react'
import '../../styles/navbar.css'
import '../../styles/login.css'
import logo from '../../images/logo-brand.png' 
import {LinkButton} from '../LinkButton'
import {Button} from '../Button'
import { NavItems } from './NavItems'
//from fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Modal from 'react-modal'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false) 

  const changeBackground = () => {
    if (window.scrollY >= 350) {
        setNavbar(true)
    } else {
        setNavbar(false)
    } 
}
const [modalIsOpen, setModalIsOpen] = useState(false)
window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'row navbar navbar-expand-lg fixed-top navbar-light' 
                            : 'row navbar navbar-expand-lg fixed-top navbar-light inactive-nav '}>
    <a className={ navbar ? "navbar-brand txt-secondary" : "active-navbar-brand" } href="#"><img className={ navbar ? "logo-brand  mr-3 " : "inactive-logo-brand"} src={logo} /> MATH GRELLIC</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <FontAwesomeIcon icon={faBars} style={{color:"#374785"}}/>
    </button> 
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
              <li className="link-shadow">
                <LinkButton buttonBg={navbar ? "dark" : "light"}>About Math Grellic</LinkButton>
              </li>
              <li className="link-shadow">
                <LinkButton buttonBg={navbar ? "dark" : "light"}>Training</LinkButton>
               </li>
              <li className="link-shadow">
                <LinkButton buttonBg={navbar ? "dark" : "light"}>Get Started</LinkButton>
              </li>
          <li className="nav-item active">
             <Button onClick={() => setModalIsOpen(true)} type="button" className="btn btn-primary btn-enrol-here btn-nav">LOG IN</Button>
             <Modal isOpen={modalIsOpen} className="login-modal-body">
                <img className="brand-logo" src={logo} />
                <div className="login-modal-close">
                  <Button onClick={() => setModalIsOpen(false)} buttonStyle="tertiary">
                    <i class="bi bi-x"></i>
                    Close
                  </Button>
                </div>     
             </Modal>
          </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar

