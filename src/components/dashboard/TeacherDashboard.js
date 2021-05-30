import { Component } from 'react'
import React from 'react'
import '../../styles/dashboard/studentdashboard.css'
import userimg from '../../images/user.jpg'

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
                                        <div className="cards">
                                            <div className="card-single">
                                                <div>
                                                    <span></span>
                                                </div>
                                                <div>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
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

