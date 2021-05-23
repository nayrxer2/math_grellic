import userimg from '../../images/user.jpg'
import '../../styles/dashboard/studentdashboard.css'
import avail_less from '../../icons/figma_icons/available_lesson.png'
import comp_act from '../../icons/figma_icons/completed_activity.png'
import pend_act from '../../icons/figma_icons/pending_activites.png'

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
                                        <div className="card-single card-anncmnt">
                                            <div>
                                            <span><img className="card-icons" src={avail_less}></img></span>
                                            </div>
                                            <div>
                                                <p>3 lessons <span><br/>Available Lessons</span></p>
                                            </div>
                                        </div>
                                        <div className="card-single card-anncmnt">
                                            <div>
                                                <span><img className="card-icons" src={pend_act}></img></span>
                                            </div>
                                            <div>
                                                <p>2 Activities <span><br/>Pending Activities</span></p>
                                            </div>  
                                        </div>
                                        <div className="card-single card-anncmnt">
                                            <div>
                                            <span><img className="card-icons" src={comp_act}></img></span>
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

export default StudentDashboard
