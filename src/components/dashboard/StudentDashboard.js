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
        <div className="stndnt-container">
            <div className="container">
                <div className=" row dtp">
                    {dt}
                </div>
                <div className=" row">
                    <i className="bi bi-brightness-high"><span>Hello Mae</span></i>
                </div>
                <div className="row content">
                <div className="col-4 c-1">
                    <div className=" c-2">
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
                    <div className=" row">
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
                    <div className=" row">
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

                <div className=" col scroll-div">
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

                <div className=" col-4">
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
        </div>
    )
}

export default StudentDashboard
