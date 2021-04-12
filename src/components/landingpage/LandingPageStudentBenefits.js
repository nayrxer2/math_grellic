import React from 'react'
import icontimezone from '../../icons/figma_icons/icon-timezone.png'
import iconspectrum from '../../icons/figma_icons/icon-spectrum.png'
import iconmap from '../../icons/figma_icons/icon-map.png'
import iconstudy from '../../icons/figma_icons/icon-study.png'
import '../../styles/landingpagestudentsbenefits.css'
export default function LandingPageStudentBenefits() {
    return (
        <div className="container-fluid col-9">
            <h1>Benefits of learning with us</h1>
            <div className="row">
                <div className="col-md-auto">
                    <img src={icontimezone}></img>
                </div>
                <div className="col">
                    <h4>Time zones ain’t no thing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div>
                <div className="col-md-auto">
                    <img src={iconspectrum}></img>
                </div>
                <div className="col">
                    <h4>Full Spectrum of Lessons</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-auto">
                    <img src={iconmap}></img>
                </div>
                <div className="col">
                    <h4>Impossible? We’re on it</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div>
                <div className="col-md-auto">
                    <img src={iconstudy}></img>
                </div>
                <div className="col">
                    <h4>Flexible Study Terms</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div> 
            </div>
        </div>
    )
}
