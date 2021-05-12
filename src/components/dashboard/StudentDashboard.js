import React, { useState, useEffect } from 'react'

import '../../styles/dashboard/studentdashboard.css'

const StudentDashboard = () => {

    const [dt, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        document.title = dt
        setInterval(() => tick(), 1000)
            return () => {
                clearInterval()
            }
    }, [])

    const tick = () => {
        setDate(new Date().toLocaleTimeString())
    }

    return (
        <div className="main-dashboard">
        <header>
            <h3>
                <label htmlFor="">
                    <span></span>
                </label>
                Dashboard
            </h3>
            <div>
                <span className="la la-bars"></span>
                <input type="search" />
            </div>
            <div className="user-wrapper">
                <img src="" alt="" />
                <div>
                    <h4>John Doe</h4>
                    <small>Super Admin</small>
                </div>
            </div>
        </header>
        <main>
            <div className="cards">
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>   
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div> 
            </div>
        </main>
    </div>
    )
}

export default StudentDashboard
