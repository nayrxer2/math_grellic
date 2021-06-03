import { Component } from 'react'
import React from 'react'
import '../../styles/dashboard/studentdashboard.css'
import userimg from '../../images/user.jpg'
import i_math from '../../icons/stdnt_dshbrd/mathematics.png'
import i_calc from '../../icons/stdnt_dshbrd/calculator.png'
import i_learn from '../../icons/stdnt_dshbrd/learning.png'
import i_bar from '../../icons/stdnt_dshbrd/btn-bar.png'
import i_chart from '../../icons/stdnt_dshbrd/chart.png'
import i_calendar from '../../icons/stdnt_dshbrd/btn-calendar.png'
import crd_img from "../../images/card-image.png"

import act_pend from '../../icons/stdnt_dshbrd/activities-pending.png'
import {Button} from '../Button'

class TeacherDasboard extends Component {

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
        return (
            <div className="main-dashboard">
               <header className={ this.state.active ? 'header_active' : 'header_inactive'}> 
                    <label onClick={this.addActiveClass} htmlFor="nav-toggle">
                        <span><i className="bi bi-list"></i></span>
                    </label>
                    <div className="user-wrapper">
                        <div>
                            <h4>John Doe</h4>
                        </div>
                        <img src={userimg} alt="" />
                    </div>
                    <div>
                        <span><i className="bi-brightness-high"></i></span>
                        <span className="h6-heading">Good Morning, Ma’am Myrhelle!</span>
                    </div>
                </header>           
                <main>
                    <div className="card-grid">
                        <div className="projects">
                            <div className="card">
                                <div className="npt-gap">                                    
                                    <div className="input-wrapper">
                                        <input type="input" placeholder="Any announcements today?"/>                                   
                                    </div>
                                    <Button buttonStyle="tertiary">Search</Button>                                      
                                </div>
                                <div className="card-header">
                                    <div>
                                        <h3>Upcoming Quizzes</h3>
                                    </div>
                                    <Button buttonStyle="primary">See all</Button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div className="section-lesson">
                                            <div className="cards">
                                                <div className="card-single">                                         
                                                    <div>
                                                        <span><img className="card-icons" src={i_learn}></img></span>
                                                    </div>
                                                    <div className="crd-text">
                                                        <span className="label-large">Lesson Title: Subtitle </span>
                                                        <span className="label-med"><br/>Completed Activities</span>    
                                                    </div>
                                                </div>    
                                                <div className="card-single">                                         
                                                    <div>
                                                        <span><img className="card-icons" src={i_calc}></img></span>
                                                    </div>
                                                    <div className="crd-text">
                                                        <span className="label-large">Lesson Title: Subtitle </span>
                                                        <span className="label-med"><br/>Completed Activities</span>    
                                                    </div>
                                                </div>                                               
                                                <div className="card-single">                                         
                                                    <div>
                                                        <span><img className="card-icons" src={i_math}></img></span>
                                                    </div>
                                                    <div className="crd-text">
                                                        <span className="label-large">Lesson Title: Subtitle </span>
                                                        <span className="label-med"><br/>Completed Activities</span>    
                                                    </div>
                                                </div>    
                                            </div>                                     
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div className="section-lesson">
                                            <div className="cards crd-lesson">
                                                <div className="crd-chart">                                                           
                                                    <img className="crd-image" src={crd_img} alt="Card image cap"/> 
                                                    <div className="crd-single">
                                                        <div className="">
                                                            <span className="label-large">Lesson Title: Subtitle </span>
                                                            <span className="label-med"><br/>Check our latest development</span>
                                                        </div>
                                                    </div>        
                                                </div>  
                                                <div className="crd-chart">
                                                    <div className="crd-single">    
                                                        <div className="">
                                                            <span className="label-large">Lesson Title: Subtitle </span>
                                                        </div>
                                                    </div>  
                                                    <div className="crd-single">
                                                        <div>
                                                            <span><img className="card-icons" src={i_bar}></img></span>
                                                        </div>
                                                        <div className="">
                                                            <span className="label-large">Lesson Title: Subtitle </span>
                                                        </div>
                                                    </div>    
                                                    <div className="crd-single">
                                                        <div>
                                                            <span><img className="card-icons" src={i_bar}></img></span>
                                                        </div>
                                                        <div className="">
                                                            <span className="label-large">Lesson Title: Subtitle </span>
                                                        </div>
                                                    </div>  
                                                    <div className="crd-single">
                                                        <div>
                                                            <span><img className="card-icons" src={i_bar}></img></span>
                                                        </div>
                                                        <div className="">
                                                            <span className="label-large">Lesson Title: Subtitle </span>
                                                        </div>
                                                    </div>  
                                                </div>         
                                            </div>           
                                        </div> 
                                    </div>
                                </div>                               
                            </div>                           
                        </div>   
                        <div className="content-performance">
                            <div className="card crd-lesson">
                                <div className="crd-chart">
                                    <div className="crd-single">
                                        <div className="">
                                            <span className="label-large">Lesson Title: Subtitle </span>
                                            <span className="label-med"><br/>Check our latest development</span>
                                        </div>
                                        <div>
                                            <span><img className="card-icons" src={i_bar}></img></span>
                                        </div>
                                    </div>               
                                    <img className="" src={i_chart} alt="Card image cap"/> 
                                </div>   
                                <div className="crd-chart">
                                    <div className="crd-single">
                                        <div className="">
                                            <span className="label-large">Lesson Title: Subtitle </span>
                                            <span className="label-med"><br/>Check our latest development</span>
                                        </div>
                                        <div>
                                            <span><img className="card-icons" src={i_bar}></img></span>
                                        </div>
                                    </div>               
                                    <img className="" src={i_chart} alt="Card image cap"/> 
                                </div>                                
                            </div>          
                        </div>   
                        <div className="content-schedule">
                            <div className="card">
                                <div className="card-header">
                                    <div>
                                        <span className="label-large">Schedule</span>
                                    </div>   
                                    <div>
                                        <span><img src={i_calendar} alt="" /></span> 
                                    </div>   
                                </div> 
                                <div className="card-body  crd-schedule">
                                    <div className="card-title">
                                        <div>
                                            <span className="label-med">April 2021</span>
                                        </div>   
                                    </div> 
                                    <div className="card-single">
                                        <div>
                                             <span><img className="card-icons" src={act_pend}></img></span>
                                        </div>
                                        <div className="crd-text">
                                            <span className="label-large">Lesson Title: Subtitle </span>
                                            <span className="label-med"><br/>Completed Activities</span>
                                        </div>
                                        </div>
                                        <div className="card-single">
                                            <div>
                                                <span><img className="card-icons" src={act_pend}></img></span>
                                            </div>
                                            <div className="crd-text">
                                                <span className="label-large">Lesson Title: Subtitle </span>
                                                <span className="label-med"><br/>Completed Activities</span>
                                            </div>
                                        </div>
                                        <div className="card-single">
                                            <div>
                                                <span><img className="card-icons" src={act_pend}></img></span>
                                            </div>
                                            <div className="crd-text">
                                                <span className="label-large">Lesson Title: Subtitle </span>
                                                <span className="label-med"><br/>Completed Activities</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="card-body crd-schedule">
                                    <div className="card-title">
                                        <div>
                                            <span className="label-med">April 2021</span>
                                        </div>   
                                    </div> 
                                    <div className="card-single">
                                        <div>
                                            <span><img className="card-icons" src={act_pend}></img></span>
                                        </div>
                                        <div className="crd-text">
                                            <span className="label-large">Lesson Title: Subtitle </span>
                                            <span className="label-med"><br/>Completed Activities</span>
                                        </div>
                                    </div>
                                    <div className="card-single">
                                        <div>
                                            <span><img className="card-icons" src={act_pend}></img></span>
                                        </div>
                                        <div className="crd-text">
                                            <span className="label-large">Lesson Title: Subtitle </span>
                                            <span className="label-med"><br/>Completed Activities</span>
                                        </div>
                                    </div>
                                    <div className="card-single">
                                        <div>
                                            <span><img className="card-icons" src={act_pend}></img></span>
                                        </div>
                                        <div className="crd-text">
                                            <span className="label-large">Lesson Title: Subtitle </span>
                                            <span className="label-med"><br/>Completed Activities</span>
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
}

export default TeacherDasboard

