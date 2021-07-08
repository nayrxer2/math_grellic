import userimg from '../../../images/user.jpg'
import '../../../styles/dashboard/dashboard.css'
import less_avail from '../../../icons/stdnt_dshbrd/lessons-availbale.png'
import act_comp from '../../../icons/stdnt_dshbrd/activities-completed.png'
import act_pend from '../../../icons/stdnt_dshbrd/activities-pending.png'
import { Component } from 'react'
import i_pencil from '../../../icons/stdnt_dshbrd/pencil.png'
import i_calc from '../../../icons/stdnt_dshbrd/calculator.png'
import i_clip from'../../../icons/stdnt_dshbrd/clipboard.png'
import i_learn from '../../../icons/stdnt_dshbrd/learning.png'
import i_math from '../../../icons/stdnt_dshbrd/mathematics.png'
import i_online from '../../../icons/stdnt_dshbrd/online-learning.png'
import i_points from '../../../icons/stdnt_dshbrd/points.png'
import i_ranking from '../../../icons/stdnt_dshbrd/ranking.png'
import i_trophies from '../../../icons/stdnt_dshbrd/trophies.png'
import i_trophy from '../../../icons/stdnt_dshbrd/trophy.png'
import i_chart from '../../../icons/stdnt_dshbrd/chart.png'
import i_bar from '../../../icons/stdnt_dshbrd/btn-bar.png'
import i_calendar from '../../../icons/stdnt_dshbrd/btn-calendar.png'
import q_mark from '../../../icons/stdnt_dshbrd/Quote-Mark.png'
import {Button} from '../../Button'

class Dashboard extends Component {

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
                <header className={ this.state.active ? 'active-header' : 'inactive-header'}> 
                    <label onClick={this.addActiveClass} htmlFor="nav-toggle">
                        <span><i className="bi bi-list"></i></span>
                    </label>
                    <div className="user-wrapper">
                        <div>
                            <p className="label-med">23 April 2021, Friday</p>
                        </div>
                        <img src={userimg} alt="" />
                    </div>
                    <div>
                        <span><i className="bi-brightness-high"></i></span>
                        <span className="h6-heading">Good Morning, Mae!</span>
                    </div>
                </header>
            <main>         
                <div className="card-grid">
                    <div className="projects">
                        <div className="card">
                            <div className="anncment-header"> 
                                <img className="qoute-mark" src={q_mark} alt="" />  
                                <div className="">            
                                    <p className="label-large">Today’s announcement</p>
                                    <p className="label-med">Any announcements made by the teacher will be put here to notify the students </p>
                                </div>
                            </div>           
                            <div className="card-body">
                                <div className="table-responsive">  
                                    <div className="lesson-progress">
                                        <div className="cards">
                                            <div className="card-single">
                                                <div>
                                                    <span><img className="card-icons" src={less_avail}></img></span>
                                                </div>
                                                <div className="crd-text">
                                                    <span className="label-large">3 lessons</span>
                                                    <span className="label-med"><br/>Available Lessons</span>
                                                </div>
                                            </div>
                                            <div className="card-single">
                                                <div>
                                                    <span><img className="card-icons" src={act_pend}></img></span>
                                                </div>
                                                <div className="crd-text">
                                                    <span className="label-large">2 Activities </span>
                                                    <span className="label-med"><br/>Pending Activities</span>
                                                </div>  
                                            </div>
                                            <div className="card-single">
                                                <div>
                                                    <span><img className="card-icons" src={act_comp}></img></span>
                                                </div>
                                                <div className="crd-text">
                                                    <span className="label-large">5 activities </span>
                                                    <span className="label-med"><br/>Completed Activities</span>                                              
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
                                    <p className="label-large">Upcoming Lessons</p>
                                </div>
                                <Button buttonStyle="primary">See all</Button>
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
                                                    <span><img className="card-icons" src={i_clip}></img></span>
                                                </div>
                                                <div className="crd-text">
                                                    <span className="label-large">Lesson Title: Subtitle </span>
                                                    <span className="label-med"><br/>Completed Activities</span>
                                                </div>
                                            </div>
                                            <div className="card-single">
                                                <div>
                                                    <span><img className="card-icons" src={i_clip}></img></span>
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
                        </div> 

                        <div className="card">
                            <div className="card-header">
                                <div>
                                    <p className="label-large">Upcoming Activities</p>                            
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
                                                    <span><img className="card-icons" src={i_learn}></img></span>
                                                </div>
                                                <div className="crd-text">
                                                    <span className="label-large">Lesson Title: Subtitle </span>
                                                    <span className="label-med"> <br/>Completed Activities</span>
                                                </div>
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
                                <img className="crd-image" src={i_chart} alt="Card image cap"/> 
                            </div>
                            <div className="card-single">
                                <div>
                                    <span><img className="card-icons" src={i_ranking}></img></span>
                                </div>
                                <div className="crd-text">
                                    <span className="label-large">1st</span>
                                    <span className="label-med"> <br/>Current ranking</span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div>
                                    <span><img className="card-icons" src={i_points}></img></span>
                                </div>
                                <div className="crd-text">
                                    <span className="label-large">245 points</span>
                                    <span className="label-med"><br/>Points earned</span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div>
                                    <span><img className="card-icons" src={i_trophies}></img></span>
                                </div>
                                <div className="crd-text">
                                    <span className="label-large">12 trophies</span>
                                    <span className="label-med"><br/>Trophies earned</span>
                                </div>
                            </div>
                        </div>          
                    </div>

                    <div className="content-schedule crd-schedule">
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
export default Dashboard
