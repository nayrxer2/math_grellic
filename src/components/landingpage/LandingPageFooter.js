import React from 'react'
import '../../styles/landingpagefooter.css'
import logo from '../../images/logo-brand.png'

export default function LandingPageFooter() {
    return (
        <div className="row ftr">
          <div className="col">
            <img className="logo-brand" src={logo} alt=""/>
            <div className="navbar-brand">MATH GRELLIC</div>
          </div>
          <div className="col body-2">© 2021 Math Grellic. All rights reserved</div>
        </div>
    )
}
