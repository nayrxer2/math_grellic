import userimg from '../../images/user.jpg'
import '../../styles/dashboard/studentdashboard.css'
import less_avail from '../../icons/figma_icons/lessons-availbale.png'
import act_comp from '../../icons/figma_icons/activities-completed.png'
import act_pend from '../../icons/figma_icons/activities-completed.png'
import React, { useState } from 'react'
import { Component } from 'react'

// const StudentDashboard  = () => {
class StudentDashboard extends Component {

    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }
    addActiveClass () {
        const currentState = this.state.active;
        this.setState({
            active: !currentState
        });
    };
    

    render () {
        return  ( 
            <div className="main-dashboard">
                <header className={ this.state.active ? 'header_W' : 'header_Q'}> 
                    <label onClick={this.addActiveClass} htmlFor="nav-toggle">
                        <span><i className="bi bi-list"></i></span>
                    </label>
                <div className="user-wrapper">
                    <div>
                        <h4>John Doe</h4>
                    </div>
                    <img src={userimg} alt="" />
                </div>
                <div><span><i className="bi-brightness-high"></i></span> Good Morning, Mae!</div>
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
                                        <div className="card-single card-anncmnt">
                                            <div>
                                            <span><img className="card-icons" src={less_avail}></img></span>
                                            </div>
                                            <div>
                                                <p>3 lessons <span><br/>Available Lessons</span></p>
                                            </div>
                                        </div>
                                        <div className="card-single card-anncmnt">
                                            <div>
                                                <span><img className="card-icons" src={act_pend}></img></span>
                                            </div>
                                            <div>
                                                <p>2 Activities <span><br/>Pending Activities</span></p>
                                            </div>  
                                        </div>
                                        <div className="card-single card-anncmnt">
                                            <div>
                                            <span><img className="card-icons" src={act_comp}></img></span>
                                            </div>
                                            <div>
                                                <p>5 activities <span><br/>Completed Activities</span></p>                                               
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
                            <button>See all <span></span></button>
                        </div> 
                        <div className="card-body">
                            <div className="table-responsive">  
                                <div className="customer">
                                       
                                <div className="cards">
                                        <div className="card-single">                                         
                                            <div>
                                                <span><i className="bi bi-archive-fill"></i></span>
                                            </div>
                                            <div>
                                                <p>5 activities <span><br/>Completed Activities</span></p>  
                                            </div>
                                        </div>
                                        <div className="card-single">
                                            <div>
                                                <span><i className="bi bi-archive-fill"></i></span>
                                            </div>
                                            <div>
                                                <p>5 activities <span><br/>Completed Activities</span></p>  
                                            </div>
                                        </div>
                                        <div className="card-single">
                                            <div>
                                                <span><i className="bi bi-archive-fill"></i></span>
                                            </div>
                                            <div>
                                                <p>5 activities <span><br/>Completed Activities</span></p>      
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
                            <button>See all <span></span></button>
                        </div> 
                        <div className="card-body">
                            <div className="table-responsive">  
                                <div className="customer">
                                       
                                <div className="cards">
                                        <div className="card-single">
                                            <div>
                                                <span><i className="bi bi-archive-fill"></i></span>
                                            </div>
                                            <div>
                                                <h4>54</h4>
                                                <span>Customer</span>
                                            </div>
                                        </div>
                                        <div className="card-single">
                                            <div>
                                                <span><i className="bi bi-archive-fill"></i></span>
                                            </div>
                                            <div>
                                                <h4>54</h4>
                                                <span>Customer</span>
                                            </div>
                                        </div>
                                        <div className="card-single">
                                            <div>
                                            <span><i className="bi bi-archive-fill"></i></span>
                                            </div>
                                            <div>
                                                <h4>54</h4>
                                                <span>Customer</span>
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
                                <span><i className="bi bi-archive-fill"></i></span>
                            </div>
                            <div>
                                <h4>54</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span><i className="bi bi-archive-fill"></i></span>
                            </div>
                            <div>
                                <h4>54</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span><i className="bi bi-archive-fill"></i></span>
                            </div>
                            <div>
                                <h4>54</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span><i className="bi bi-archive-fill"></i></span>
                            </div>
                            <div>
                                <h4>54</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                    </div>                
                </div>

                <div className="projects">
                    <div className="card">
                        <div className="card-single">
                            <div>
                                <span><i className="bi bi-archive-fill"></i></span>
                            </div>
                            <div>
                                <h4>54</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span><i className="bi bi-archive-fill"></i></span>
                            </div>
                            <div>
                                <h4>54</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span><i className="bi bi-archive-fill"></i></span>
                            </div>
                            <div>
                                <h4>54</h4>
                                <span>Customer</span>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </main>
    </div>
        )
    }
       
}    
export default StudentDashboard
