import React from 'react'
import '../../styles/landingpagesplash.css'
import logo from '../../images/logo-brand.png'
import { Button } from '../Button'

const LandingPageSplash = () => {
    return (
        <div className="container-fluid justify-content-around col-12">
            <div className="main-content">
                <img className="lp-logo-brand" src={logo} />
                <h1 className="main-info headline-h1"> MATH GRELLIC</h1>
                <p className="main-info body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.</p>
                <Button type="button">Enroll Here</Button>
            </div>
        </div> 
    )
}
export default LandingPageSplash
