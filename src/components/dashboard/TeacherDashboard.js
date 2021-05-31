import { Component } from 'react'
import React from 'react'
import '../../styles/dashboard/studentdashboard.css'
import userimg from '../../images/user.jpg'
import i_math from '../../icons/stdnt_dshbrd/mathematics.png'
import i_chart from '../../icons/stdnt_dshbrd/chart.png'
import i_bar from '../../icons/stdnt_dshbrd/btn-bar.png'
import i_points from '../../icons/stdnt_dshbrd/points.png'
import i_ranking from '../../icons/stdnt_dshbrd/ranking.png'
import i_trophies from '../../icons/stdnt_dshbrd/trophies.png'
import i_calendar from '../../icons/stdnt_dshbrd/btn-calendar.png'
import act_pend from '../../icons/stdnt_dshbrd/activities-pending.png'


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
                <header>
                    <label htmlFor="">
                        <span><i></i></span>
                    </label>
                </header>
                <div className="user-wrapper">
                    <div>
                        <h4></h4>
                    </div>
                </div>
                <div>
                    <span><i></i></span>
                    <span>Good Morning, Ma’am Myrhelle!</span>
                </div>
                <main>
                    <div className="card-grid">
                        <div className="projects">

                            <div className="card">
                                <div className="card-header">
                                    <div className="search-wrapper">
                                        <span className="la la-bars"></span>
                                        <input type="search" placeholder="Search here"/>
                                    </div>
                                    <button>search</button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div className="section-lesson">
                                            <div className="cards">
                                                <div className="card-single">                                         
                                                    <div>
                                                        <span><img className="card-icons" src={i_math}></img></span>
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
                                            <div className="cards">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-performance">
                            <div className="card">
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
                                <div className="card-body">
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
                                <div className="card-body">
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

