import React from 'react'
import '../../styles/landingpagesectionteacherbenefits.css'
import stack2 from '../../icons/figma_icons/stack2.png'
import iconspectrum from '../../icons/figma_icons/icon-spectrum.png'
import iconmap from '../../icons/figma_icons/icon-map.png'
import iconstudy from '../../icons/figma_icons/icon-study.png'

export default function LandingSectionTeacherBenefits() {
    return (
        <div className="container-fluid col-9 lstb-text-cntr justify-content-center">
                <div className="h2-heading">Maximized <span className="text-accent">Teacher</span> Efficiency</div>
                <div className="row lstb-mrgn-top">
                    <div className="col-sm-3">
                        <img src={iconmap} />
                        <p className="subheading-bold lstb-mrgn-top">Spend Less Time</p>
                        <p className="lead-2">Spend less time on paperwork and assessments</p>
                    </div>
                    <div className="col-sm-3">
                        <img src={iconspectrum} alt=""/>
                        <p className="subheading-bold lstb-mrgn-top">Easy Tracking</p>
                        <p className="lead-2">Learning analytics provide real-time insights to students’ learning</p>
                    </div>
                    <div className="col-sm-3">
                    <img src={iconstudy} alt=""/>
                        <p className="subheading-bold lstb-mrgn-top">Effortless differentiation</p>
                        <p className="lead-2">We make it easy for you to customise the exercises </p>
                    </div>
                    <div className="col-sm-3">
                    <img src={stack2} alt=""/>
                        <p className="subheading-bold lstb-mrgn-top">Better learning results</p>
                        <p className="lead-2">Spend less time on paperwork and assessments</p>
                    </div>
                </div>
        </div>
    )
}
