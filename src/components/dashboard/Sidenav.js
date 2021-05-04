import React from 'react'
import '../../styles/dashboard/sidenav.css'
import logo from '../../images/logo-brand.png' 

function SideNav() {
    return (
        <div className="sidenav">
            <p className="txt-secondary navbar-brand"  href="#/"><img className="logo-brand" src={logo} alt=""/> MATH GRELLIC</p>
            <ul>
                <li><i className="bi bi-grid"></i> Home</li>
                <li><i className="bi bi-collection-play"></i> Lessons</li>
                <li><i className="bi bi-dice-3"></i> Drills and Exercises</li>
                <li><i className="bi bi-file-earmark-bar-graph"></i> Exams</li>
                <li><i className="bi bi-bar-chart"></i> Performance</li>
                <li><i className="bi bi-chat"></i> Ask Help</li>
            </ul>  
        </div>
    )
}

export default SideNav
