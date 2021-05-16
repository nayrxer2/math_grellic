import React, { useState, useEffect } from 'react'
import userimg from '../../images/user.jpg'
import '../../styles/dashboard/studentdashboard.css'

const StudentDashboard = () => {

    return (
        <div className="main-dashboard">
        <header>
            <h2>
                <label htmlFor="nav-toggle">
                    <span><i className="bi bi-list"></i></span>
                </label>
                Dashboard
            </h2>
            <div className="search-wrapper">
                <span className="la la-bars"></span>
                <input type="search" placeholder="Search here"/>
            </div>
            <div className="user-wrapper">
                <img src={userimg} alt="" />
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
                        <span><i className="bi bi-archive-fill"></i></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>
                    </div>
                    <div>
                        <span><i className="bi bi-archive-fill"></i></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>
                    </div>
                    <div>
                        <span><i className="bi bi-archive-fill"></i></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>54</h1>
                        <span>Customer</span>
                    </div>
                    <div>
                        <span><i className="bi bi-archive-fill"></i></span>
                    </div>
                </div>
            </div>
            <div className="recent-grid">
                <div className="projects">
                    <div className="card">
                        <div className="card-header">
                            <h3>Recent Projects</h3>
                            <button>See all <span></span></button>
                        </div>   
                        <div className="card-body">
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Project Title</td>
                                            <td>Department</td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td>
                                                <span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>Frontend</td>
                                            <td>
                                                <span className="status pink"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop App</td>
                                            <td>Mobile Team</td>
                                            <td>
                                                <span className="status orange"></span>
                                                pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td>
                                                <span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>Frontend</td>
                                            <td>
                                                <span className="status pink"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop App</td>
                                            <td>Mobile Team</td>
                                            <td>
                                                <span className="status orange"></span>
                                                pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td>
                                                <span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>Frontend</td>
                                            <td>
                                                <span className="status pink"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop App</td>
                                            <td>Mobile Team</td>
                                            <td>
                                                <span className="status orange"></span>
                                                pending
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                 
                    </div>                    
                </div>
                <div className="customers">
                    <div className="card">
                        <div className="card-header">
                            <h3>New Customer</h3>
                            <button>See all <span></span></button>
                        </div>   
                        <div className="card-body">
                            <div className="customer">
                              <div className="info">
                                <img src={userimg} alt="" className="img-cstmr" />
                                <div>
                                    <h4>Lewis S. Cunningham</h4>
                                    <small>CEO Expert</small>
                                </div>
                              </div>
                              <div className="contact">
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                              </div>
                            </div>                           
                        </div> 
                        <div className="card-body">
                            <div className="customer">
                              <div className="info">
                                <img src={userimg} alt="" className="img-cstmr" />
                                <div>
                                    <h4>Lewis S. Cunningham</h4>
                                    <small>CEO Expert</small>
                                </div>
                              </div>
                              <div className="contact">
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                              </div>
                            </div>                           
                        </div> 
                        <div className="card-body">
                            <div className="customer">
                              <div className="info">
                                <img src={userimg} alt="" className="img-cstmr" />
                                <div>
                                    <h4>Lewis S. Cunningham</h4>
                                    <small>CEO Expert</small>
                                </div>
                              </div>
                              <div className="contact">
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                              </div>
                            </div>                           
                        </div> 
                        <div className="card-body">
                            <div className="customer">
                              <div className="info">
                                <img src={userimg} alt="" className="img-cstmr" />
                                <div>
                                    <h4>Lewis S. Cunningham</h4>
                                    <small>CEO Expert</small>
                                </div>
                              </div>
                              <div className="contact">
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                              </div>
                            </div>                           
                        </div> 
                        <div className="card-body">
                            <div className="customer">
                              <div className="info">
                                <img src={userimg} alt="" className="img-cstmr" />
                                <div>
                                    <h4>Lewis S. Cunningham</h4>
                                    <small>CEO Expert</small>
                                </div>
                              </div>
                              <div className="contact">
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                              </div>
                            </div>                           
                        </div> 
                        <div className="card-body">
                            <div className="customer">
                              <div className="info">
                                <img src={userimg} alt="" className="img-cstmr" />
                                <div>
                                    <h4>Lewis S. Cunningham</h4>
                                    <small>CEO Expert</small>
                                </div>
                              </div>
                              <div className="contact">
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                                  <span><i className="bi bi-arrow-up-square"/></span>
                              </div>
                            </div>                           
                        </div> 
                    </div> 
                </div>
            </div>
        </main>
    </div>
    )
}

export default StudentDashboard
