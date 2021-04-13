import React from 'react'
import icontimezone from '../../icons/figma_icons/icon-timezone.png'
import iconspectrum from '../../icons/figma_icons/icon-spectrum.png'
import iconmap from '../../icons/figma_icons/icon-map.png'
import iconstudy from '../../icons/figma_icons/icon-study.png'
import '../../styles/landingpagestudentsbenefits.css'
export default function LandingPageStudentBenefits() {
    return (
        <div className="container-fluid col-9">
            <p className="h2-heading">Benefits of <span className="text-accent">learning</span> with us</p>
            <div className="row">
                <div className="col-md-auto">
                    <img src={icontimezone}></img>
                </div>
                <div className="col">
                    <p className="h5-heading">Time zones ain’t no thing</p>
                    <p className="lead-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div>
                <div className="col-md-auto">
                    <img src={iconspectrum}></img>
                </div>
                <div className="col">
                    <p className="h5-heading">Full Spectrum of Lessons</p>
                    <p className="lead-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-auto">
                    <img src={iconmap}></img>
                </div>
                <div className="col">
                    <p className="h5-heading">Impossible? We’re on it</p>
                    <p className="lead-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div>
                <div className="col-md-auto">
                    <img src={iconstudy}></img>
                </div>
                <div className="col">
                    <p className="h5-heading">Flexible Study Terms</p>
                    <p className="lead-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                </div> 
            </div>
        </div>
    )
}
