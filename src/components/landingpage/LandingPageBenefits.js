import React from 'react'
import icontimezone from '../../icons/figma_icons/icon-timezone.png'
import iconspectrum from '../../icons/figma_icons/icon-spectrum.png'
import iconmap from '../../icons/figma_icons/icon-map.png'
import '../../styles/landingpagestyle/landingpagebenefits.css'
import logobghuman from '../../images/2-human-char.png'
export default function LandingPageBenefits() {
    return (
        <div id="section-benefits" className="container-fluid section-top">
            <p className="h2-heading h2-mrgn">Benefits of <span className="text-accent">learning</span> with us</p>
            <div className="row container-fluid img-human">
                <div className="col-md-9">
                    <div className="row">
                            <div className="col-md-auto">   
                                <img src={icontimezone} alt="icontimezone"></img>
                            </div>
                            <div className="col">
                                <p className="h5-heading">Easy Tracking</p>
                                <p className="lead-2 text-med">Learners can easily track their learning progress and teachers at the same time can easily monitor the performances of their learners through the “statistics” feature.</p>
                            </div> 
                        </div>
                    <div className="row">
                            <div className="col-md-auto">
                                <img src={iconspectrum} alt="iconspectrum"></img>
                            </div> 
                            <div className="col">
                                <p className="h5-heading">Learning is Fun</p>
                                <p className="lead-2 text-med">Learning a mathematical skill is embedded on games where learners play, have fun and at the same time learn. </p>
                            </div>
                        </div>
                    <div className="row">
                            <div className="col-md-auto">
                                <img src={iconmap} alt=""></img>
                            </div>
                            <div className="col">
                                <p className="h5-heading">Flexible Study Terms</p>
                                <p className="lead-2 text-med">The student can organize his/her class with his/her teacher at a schedule most convenient to him or her. No need to attend a face-to-face class and go to community learning centers to attend Alternative Learning System (ALS) classes.</p>
                            </div>
                        </div>
                </div>
                <div className="col-md-3">
                    <img className="img-human" src={logobghuman} alt=""/>
                </div>
            </div>
           
        </div>
    )
}
