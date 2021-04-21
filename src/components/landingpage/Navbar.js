import React, { useState } from 'react'
import '../../styles/navbar.css'
import logo from '../../images/logo-brand.png' 
import {LinkButton} from '../LinkButton'
import {Button} from '../Button'
//from fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Modal from '../modals/modal-auth'

import { Anchor } from 'antd';

const { Link } = Anchor;


const Navbar = () => {
  const [navbar, setNavbar] = useState(false) 

  const changeBackground = () => {
    if (window.scrollY >= 350) {
        setNavbar(true)
    } else {
        setNavbar(false)
    } 
}

const modalRef = React.useRef()
const openModal = () => {
  modalRef.current.openModal()
}

window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'row navbar navbar-expand-lg fixed-top navbar-light' : 'row navbar navbar-expand-lg fixed-top navbar-light inactive-nav '}>
    <a className={ navbar ? "navbar-brand txt-secondary" : "active-navbar-brand" } href="#"><img className={ navbar ? "logo-brand  mr-3 " : "inactive-logo-brand"} src={logo} /> MATH GRELLIC</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
    <FontAwesomeIcon icon={faBars} style={{color:"#374785"}}/>
    </button> 
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
    
            <div className="dropdown">
                <button className="btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <LinkButton buttonBg={navbar ? "dark" : "light"}>About Math Grellic <i class="bi bi-caret-down-fill" /></LinkButton>
                </button>
                <Anchor>
                  <div class="dropdown-menu">
                    {/* <h6 class="dropdown-header">Dropdown header</h6> */}
                    <Link><a class="dropdown-item" href="#">Background</a></Link>
                    <Link><a class="dropdown-item" href="#section-feature">Features</a></Link>
                    <Link><a class="dropdown-item" href="#section-teacher">Benefits</a></Link>
                  </div>
                </Anchor>
            </div>
            
              <li className="link-shadow">
                <LinkButton buttonBg={navbar ? "dark" : "light"}>Training</LinkButton>
               </li>
              <li className="link-shadow">
                <LinkButton buttonBg={navbar ? "dark" : "light"}>Get Started</LinkButton>
              </li>
          <li className="nav-item active">
              <Button onClick={openModal} type="button" className="btn btn-primary btn-enrol-here btn-nav">LOG IN</Button>
              <Modal className="modal-dialog-scrollable" ref={modalRef}/>
          </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar

