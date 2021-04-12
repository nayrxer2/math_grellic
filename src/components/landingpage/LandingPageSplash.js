import React from 'react'
import '../../styles/landingpagesplash.css'
import logo from '../../images/logo-brand.png'

const LandingPageSplash = () => {
    return (
        <div className="container-fluid justify-content-around col-9">
            <div className="col-6">
                <img className="lp-logo-brand" src={logo} />
                <h1 className="main-info headline-h1"> MATH GRELLIC</h1>
                <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.</p>
                <button type="button" className="btn btn-primary btn-enrol-here"><ion-icon name="arrow-back" /> ENROLL HERE</button>
            </div>
        </div> 
    )
}
export default LandingPageSplash
