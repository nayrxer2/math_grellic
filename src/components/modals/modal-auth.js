import React, {forwardRef, useImperativeHandle} from 'react'
import ReactDOM from 'react-dom'
import '../../styles/modal-auth.css'
import imgTeacher from '../../images/teacher-img.png' 
import imgStudent from '../../images/student-img.png'
import {Button} from '../Button'
import logo from '../../images/logo-brand.png' 

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = React.useState(false)

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            closeModal: () => close()
        }
    })

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
            <div className={"modal-auth-wrapper"}>
                <div className={"modal-auth-backdrop"}/>
                <div className={"modal-auth-box"}>
                    {/* {props.children} */}

                    <img className="brand-logo" src={logo}/>
                  <div className="modal-auth-close">
                    <Button onClick={() => close()} 
                    buttonStyle="tertiary" 
                    >
                      <i class="bi bi-x"></i>
                      Close
                    </Button>
                  </div>
                  <h1 className="h3-heading text-center selection-header">Which one are you?</h1>
                  <p className="body-2 text-center">Select your role in the classroom to login</p>

                  <div class="row justify-content-center text-center">
                    <div class="col-lg-4 col-md-12">
                      <img className="icon-style image-fluid selection-img" src={imgTeacher}/>
                      <h4 className="subheading-bold selection-label">Teacher</h4> 
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <img className="icon-style image-fluid selection-img" src={imgStudent}/>
                      <h4 className="subheading-bold selection-label">Student</h4>  
                    </div>
                  </div>
                </div>
            </div>, document.getElementById("modal-root"))
    }

    return null

})

export default Modal