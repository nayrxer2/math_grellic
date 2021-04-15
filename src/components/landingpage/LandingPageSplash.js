import React from 'react'
import '../../styles/landingpagesplash.css'
import { Button } from '../Button'

const LandingPageSplash = () => {
    return (
        <div id="section-splash" className="container-fluid justify-content-around">
            <div className="main-content">
                <h1 className="main-info headline-h1"> MATH GRELLIC</h1>
                <p className="main-info body-1">Whenever the fun starts, learning happens</p>
                <Button type="button">Get Started Now</Button>
            </div>
        </div> 
    )
}
export default LandingPageSplash
