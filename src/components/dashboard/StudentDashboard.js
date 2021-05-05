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
        <div className="stndnt-container col">
            <div className="container">
                <div className="row dtp">
                    {dt}
                </div>
                <div className="row">
                    <i className="bi bi-brightness-high"><span>Hello Mae</span></i>
                </div>                                                                                                                         
                <div className="row">
                <div className="col-6 column-1">
                        <p className="">Today’s announcement</p>
                        <p className="">Any announcements made by the teacher will be put here to notify the students </p>                                 
                    <div className="row column-2">
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Upcoming Lessons</p>
                    <div className="column-2 row">
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Upcoming Lessons</p>
                    <div className="row column-2">
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div> 
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border rounded border-light card">
                                <div className="card-item">
                                    <p className="card-title">111111111111111111111111</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="col-3 scroll-div">
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

                <div className="col-3">
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
