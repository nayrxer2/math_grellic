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
                Good Morning, Mae!
            </h2>
           
            <div className="user-wrapper">
                <div>
                    <h4>John Doe</h4>
                </div>
                <img src={userimg} alt="" />
            </div>
        </header>
        <main>         
            <div className="recent-grid">
                <div className="projects">
                    
                    <div className="card">
                        <div className="card-header">
                            <div>
                                <h3>Today’s announcement</h3>
                                <p>Any announcements made by the teacher will be put here to notify the students </p>
                            </div>
                        </div>           
                        <div className="card-body">
                            <div className="table-responsive">  
                                <div className="customer">
                                   
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
                                    </div>   

                                </div>
                            </div>  
                        </div> 
                    </div> 

                    <div className="card">

                        <div className="card-header">
                            <div>
                                <h3>Upcoming Lessons</h3>
                            </div>
                        </div> 
                        <div className="card-body">
                            <div className="table-responsive">  
                                <div className="customer">
                                       
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
                                    </div>  

                                </div>
                            </div>  
                        </div>     

                    </div> 

                    <div className="card">

                        <div className="card-header">
                            <div>
                                <h3>Upcoming Activities</h3>
                            </div>
                        </div> 
                        <div className="card-body">
                            <div className="table-responsive">  
                                <div className="customer">
                                       
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
                                    </div> 

                                </div>
                            </div>  
                        </div>     

                    </div> 

                </div>

                <div className="projects">
                    <div className="card">
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
                </div>

                <div className="projects">
                    <div className="card">
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
                </div>

                {/* <div className="customers">
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
                    </div> 
                </div> */}
                
            </div>
        </main>
    </div>
    )
}

export default StudentDashboard
