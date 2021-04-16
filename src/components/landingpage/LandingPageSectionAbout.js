import React from 'react'
import '../../styles/landingpagesectionabout.css'
import iconboard from '../../icons/figma_icons/board.png'
import iconscroll from '../../icons/figma_icons/scroll.png'
import iconstack from '../../icons/figma_icons/stack.png'
import logo from '../../images/logo-brand-bg.png'

export default function LandingPageSectionFeature() {
    return (
        <div id="section-feature" className="container-fluid">
        <div className="row container-fluid">
          <div className="col-md-5">
            <img className="lp-logo-brand-bg" src={logo} />
          </div>
            <div className="col-md-7">
              <p className="h2-heading text-high mb-4">ABOUT US</p> 
              <p className="lead-1 text-med"><span className="text-accent">Math Grellic</span> is a game-based website application designed and developed to help address the least dealt learning competencies of the K to 12 Basic Education Curriculum for the Alternative Learning System (ALS-K to 12) specifically in the Learning Strand 3 (Mathematical and Problem Solving Skills).</p>                
              <p className="lead-1 text-med">Moreover, this website application is designed not only to help the Alternative Learning System (ALS) learners master a mathematical skill but also the Alternative Learning System (ALS) teachers to easily track the progress of their learners and give feedbacks immediately. Less paper works in the case of teachers for everything is made easier through the help of technology. </p>          
            </div>
          </div>
        <div className="container-fluid row">
        <div className="h2-heading text-high mb-4">ABOUT <span className="text-accent">MATH GRELLIC?</span></div> 
        <div className="row card-container">
          <div className="card-body col-4">
              <div className="border rounded grid-item-box border-light col-sm-auto col-xs-auto">
                <div className="card-item">
                  <img className="icon-style" src={iconboard}/>
                  <h4 className="card-title subheading-bold">Maximized Teacher Efficiency</h4>
                  <p className="lead-2 text-med">Spend less time on paperwork and assessments. Easily track students’ progress and give immediate feedback.</p>
                </div>
              </div>
          </div>
          <div className="card-body col-4">
            <div className="border rounded grid-item-box border-light card col-sm-auto col-xs-auto">
              <div className="card-item">
                <img className="icon-style" src={iconscroll}/>
                <h4 className="card-title subheading-bold">User Friendly</h4>
                <p className="lead-2 text-med">Easy to use both for students and teachers, either technology savvy or not.</p>
              </div>
            </div>
          </div>
          <div className="card-body col-4">
            <div className="border rounded grid-item-box border-light card col-sm-auto col-xs-auto">
              <div className="card-item">
                <img className="icon-style" src={iconstack}/>
                <h4 className="card-title subheading-bold">Organized Course</h4>
                <p className="lead-2 text-med">Lessons and assessments are organized in a way of increasing difficulty to gradually facilitate the absorption of topics at hand</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
}
