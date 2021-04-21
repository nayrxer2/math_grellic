import React from 'react'
import '../../styles/landingpagestyle/landingpagesplash.css'
import { Button } from '../Button'
import Modal from '../modals/modal-auth'




const LandingPageSplash = () => {

const modalRef = React.useRef()
const openModal = () => {
  modalRef.current.openModal()
}
    return (
        <div id="section-splash" className="container-fluid justify-content-around">
            <div className="main-content">
                <h1 className="main-info headline-h1"> MATH GRELLIC</h1>
                <p className="main-info body-1">Whenever the fun starts, learning happens</p>
                <Button onClick={openModal} type="button">Get Started Now</Button>
                <Modal className="modal-dialog-scrollable" ref={modalRef}/>
            </div>
        </div> 
    )
}
export default LandingPageSplash
