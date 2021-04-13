import React from 'react'
import imglinetop from '../../images/lines-top.png'
import imglinebottom from '../../images/lines-bottom.png'
import imgdashboard  from '../../images/dashboard.png'
import bgcolor from '../../images/bg-dashboard.png'
import '../../styles/landingpagesdashboard.css'


export default function LandingPageDashboard() {
    return (
        <div className="row col-12"> 
            <div className="row col-md-4">
                <img className="lines-top content-to-hide" src={imglinetop} />
            </div>
            <div className="row col-md-12 ml-md-auto dashboard-img">
                <div className="col-8 col-md-7"><img className="img-fluid" src={bgcolor} /></div>
                <div className="col-4 col-md-5 align-self-center col-content">
                    <p className="">Student / Professor Dashboard</p>
                    <h1 className="">Dashboard. <br/>Organize, Prioritize and Learn with Ease</h1>
                    <p className="">Let’s Get Started</p>
                </div>
            </div>
            <div className="row col-md-6 offset-md-1">
                <img className="" src={imglinebottom} />
            </div> 
        </div>
    )
}
