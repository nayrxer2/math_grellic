import React from 'react'
import imglinetop from '../../images/lines-top.png'
import imglinebottom from '../../images/lines-bottom.png'
import imgdashboard  from '../../images/dashboard.png'
import bgcolor from '../../images/bg-dashboard.png'
import '../../styles/landingpagesdashboard.css'
import { LinkButton } from '../LinkButton'


export default function LandingPageDashboard() {
    return (
        <div id="section-dashboard" className="row col-12 pl-0"> 
            <div className="row col-md-4">
                <img className="lines" src={imglinetop} />
            </div>

            <div className="row col-md-12 ml-md-auto dashboard-img">
                <div className="col-8 col-md-7 pl-0"><img className="img-fluid" src={bgcolor} /></div>
                <div className="col-4 col-md-5 align-self-center col-content">
                    <p className="subheading">Student / Professor Dashboard</p>
                    <div className="h3-heading text-high mb-3"><span className="text-accent">Dashboard. </span><br/>Organize, Prioritize<br/>and Learn with Ease</div> 
                    <LinkButton buttonBg="dark" buttonSize="large=lnkbtn">Let's Get Started</LinkButton>
                </div> 
            </div>

            <div className="row col-md-6 offset-md-1">
                <img className="lines-bottom" src={imglinebottom} />
            </div> 
        </div>
    )
}
