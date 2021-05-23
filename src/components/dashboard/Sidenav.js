import React from 'react'
import '../../styles/dashboard/sidenav.css'
import logo from '../../images/logo-brand.png' 

function SideNav() {
    return (  
        <div className="sidebar"> 
            <div className="sidebar-brand">
                <h2>
                    <span>
                        <img className="brand-logo" src={logo} alt="" />
                    </span>
                    <span className="txt-secondary navbar-brand">
                        Math Grellic
                    </span>
                </h2> 
            </div> 
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="" className="active">
                            <span><i className="bi bi-grid"></i></span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><i className="bi bi-collection-play"></i></span>
                            <span>Lesson</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><i className="bi bi-dice-3"></i></span>
                            <span>Drills and Exercises</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><i className="bi bi-file-earmark-bar-graph"></i></span>
                            <span>Exams</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><i className="bi bi-bar-chart"></i></span>
                            <span>Performance</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><i className="bi bi-chat"></i></span>
                            <span>Ask Help</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>      
    )
}

export default SideNav
