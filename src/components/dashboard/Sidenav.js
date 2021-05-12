import React from 'react'
import '../../styles/dashboard/sidenav.css'
import logo from '../../images/logo-brand.png' 

function SideNav() {
    return (
        <div className="sidebar">        
            <div className="sidebar-brand">
                <h2><span className=""><img classname="" src={logo} alt="" /></span> Math Grellic</h2> 
            </div>  
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="">
                            <span></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span></span>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span></span>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span></span>
                            <span>Inventory</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span></span>
                            <span>Account</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span></span>
                            <span>Tasks</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
