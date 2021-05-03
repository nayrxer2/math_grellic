import React, { useState, useEffect } from 'react'
import logo from '../../images/logo-brand.png' 
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
        <div className="stndnt-container">
            <div className="sidenav">
                <p className="txt-secondary navbar-brand"  href="#/">
                    <img className="logo-brand" src={logo} alt=""/> MATH GRELLIC
                </p>
                <ul>
                    <li><i className="bi bi-grid"></i> Home</li>
                    <li><i className="bi bi-collection-play"></i> Lessons</li>
                    <li><i className="bi bi-dice-3"></i> Drills and Exercises</li>
                    <li><i className="bi bi-file-earmark-bar-graph"></i> Exams</li>
                    <li><i className="bi bi-bar-chart"></i> Performance</li>
                    <li><i className="bi bi-chat"></i> Ask Help</li>
                </ul>  
            </div>
            <div className="container row col-12">

                <div className="container row dtp">
                    <div>{dt}</div>
                </div>

                <div className="container col-4">
                    <div className="container row">
                        <i className="bi bi-brightness-high"><span>Hello Mae</span></i>
                    </div>
                    <div className="container row">
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container row">
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container row">
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="container col-4 scroll-div">
                    <div className="card-body">
                        <div className="border rounded border-light card">
                            <div className="card-item">
                                <p className="card-title">2</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="border rounded border-light card">
                            <div className="card-item">
                                <p className="card-title">2</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="border rounded border-light card">
                            <div className="card-item">
                                <p className="card-title">2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container col-4">
                    <div className="card-body">
                        <div className="border rounded border-light card">
                            <div className="card-item">
                                <p className="card-title">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="border rounded border-light card">
                            <div className="card-item">
                                <p className="card-title">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="border rounded border-light card">
                            <div className="card-item">
                                <p className="card-title">3</p>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div> 
        </div>
    )
}

export default StudentDashboard
