import React from 'react'
import '../../styles/landingpagesectionteacherbenefits.css'
import stack2 from '../../icons/figma_icons/stack2.png'
import iconspectrum from '../../icons/figma_icons/icon-spectrum.png'
import iconmap from '../../icons/figma_icons/icon-map.png'
import iconstudy from '../../icons/figma_icons/icon-study.png'
import iconfeature from '../../icons/figma_icons/icon-feature.png'
import iconscroll from '../../icons/figma_icons/icon-scroll.png'

export default function LandingSectionTeacherBenefits() {
    return (
        <div id="section-teacher" className="container-fluid lstb-text-cntr section-top">
                <div className="h2-heading row justify-content-center"><p>Key <span className="text-accent">Features</span></p></div>
                <div className="row lstb-mrgn-top justify-content-center">

                    <div className="row col-9">
                        <div className="col-md-4">
                            <img src={iconfeature} alt=""/>
                            <p className="subheading-bold lstb-mrgn-top">Simplified Lessons</p>
                            <p className="lead-2">Lessons can easily be accesed and are presented in video format  to be easily grasped by Alternative Learning System (ALS) learners through their online accounts.</p>
                        </div> 
                        <div className="col-md-4">
                            <img src={iconstudy} alt=""/>
                            <p className="subheading-bold lstb-mrgn-top">Drills and Exercises</p>
                            <p className="lead-2">Games are provided for the students to practice their mathematical skills. Unlike in the traditional way, mastering math is just few clicks away, acquiring skills and trophies.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={iconscroll} alt=""/>
                            <p className="subheading-bold lstb-mrgn-top">Online Assessments</p>
                            <p className="lead-2">Summative tests and quizzes online can be answered wherever the students want. Scores are  also immediately reflected upon the completion of exams.</p>
                        </div>                      
                    </div>

                    <div className="row col-9">
                        <div className="col-md-4">
                            <img src={iconspectrum} alt=""/>
                            <p className="subheading-bold lstb-mrgn-top">Immediate Feedbacks</p>
                            <p className="lead-2">In assessments, the students can automatically see the results of their exams right after completing it. Help is also provided in case that student want to ask help from their teacher regarding a particular part in the exam which seem to be ambiguous to them. </p>
                        </div>
                        <div className="col-md-4">
                            <img src={iconmap} alt=""/>
                            <p className="subheading-bold lstb-mrgn-top">Ready Made Statistics </p>
                            <p className="lead-2">Students can automatically see their individual progress upon completion of activities, summative tests and quizzes using scatter plots and tables. An overall statistics comparing the performances of all students in the class are also available both for teachers and students.</p>
                        </div>                       
                        <div className="col-md-4">
                            <img src={stack2} alt=""/>
                            <p className="subheading-bold lstb-mrgn-top">Reward System </p>
                            <p className="lead-2">In every completion of tasks, a learner earns points with corresponding badges or trophies to motivate them to strive. Rank system is also available in order for learners to see their progress relative to their classmates’ performances in the class. </p>
                        </div>  
                    </div>

                </div>
        </div>
    )
}
