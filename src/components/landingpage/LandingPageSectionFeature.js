import React from 'react'
import '../../styles/landingpagesectionfeature.css'
import iconboard from '../../icons/figma_icons/board.png'
import iconscroll from '../../icons/figma_icons/scroll.png'
import iconstack from '../../icons/figma_icons/stack.png'

export default function LandingPageSectionFeature() {
    return (
        <div className="container-fluid col-9">
            <div className="h2-heading text-high">WHY CHOOSE <span className="text-accent">MATH GRELLIC?</span></div> 
        <div className="row card-container">
          <div className="card-body">
              <div className="border rounded grid-item-box border-light col-sm-auto col-xs-auto">
                <div className="card-item">
                  <img className="icon-style" src={iconboard}/>
                  <h4 className="card-title">User Friendly</h4>
                  <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
              </div>
          </div>
          <div className="card-body">
            <div className="border rounded grid-item-box border-light card col-sm-auto col-xs-auto">
              <div className="card-item">
                <img className="icon-style" src={iconscroll}/>
                <h4 className="card-title">User Friendly</h4>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="border rounded grid-item-box border-light card col-sm-auto col-xs-auto">
              <div className="card-item">
                <img className="icon-style" src={iconstack}/>
                <h4 className="card-title">User Friendly</h4>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
