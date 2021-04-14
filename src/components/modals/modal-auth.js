import React, {forwardRef, useImperativeHandle} from 'react'
import ReactDOM from 'react-dom'
import '../../styles/modal-auth.css'
import imgTeacher from '../../images/teacher-img.png' 
import imgStudent from '../../images/student-img.png'
import bgLogin from '../../images/login-bg.png'
import {Button} from '../Button'
import logo from '../../images/logo-brand.png' 

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = React.useState(false)
    const [showSelection, setShowSelection] = React.useState(true)
    const [showLogin, setShowLogin] = React.useState(false)
    const [showTeacherLogin, setshowTeacherLogin] = React.useState(false)
    const [showStudentLogin, setShowStudentLogin] = React.useState(false)

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
        setShowSelection(true)
        setShowLogin(false)
    }

    const selection = (currentUser) => {
      if(showSelection){
        setShowSelection(false)
        setShowLogin(true)
      }else{
        setShowSelection(true)
        setShowLogin(false)
      }

      if (currentUser == "Teacher"){
        setshowTeacherLogin(true)
        setShowStudentLogin(false)
      }else{
        setshowTeacherLogin(false)
        setShowStudentLogin(true)
      }
    }

    if (display) {
        return ReactDOM.createPortal(
            <div className={"modal-selection-wrapper"}>
                <div className={"modal-selection-backdrop"}/>
                {/* Selection */}
                  {
                    showSelection ? 
                    <div className={"modal-selection-box"}>
                      <div className="modal-selection-close"><Button onClick={() => close()} buttonStyle="tertiary" ><i class="bi bi-x"></i>Close</Button></div>
                      <img className="brand-logo" src={logo}/>
                      <div id="selection-container" className="modal-auth-footer">
                          <h1 className="h3-heading text-center selection-header">Which one are you?</h1>
                          <p className="body-2 text-center">Select your role in the classroom to login</p>

                          <div class="row justify-content-center text-center">
                            <div onClick={() => selection("Teacher")} class="col-lg-4 col-md-12">
                              <img className="icon-style image-fluid selection-img" src={imgTeacher}/>
                              <h4 className="subheading-bold selection-label">Teacher</h4>
                            </div>
                              
                            <div onClick={() => selection("Student")} class="col-lg-4 col-md-12">
                              <img className="icon-style image-fluid selection-img" src={imgStudent}/>
                              <h4 className="subheading-bold selection-label">Student</h4>  
                            </div>
                            </div>
                        </div>
                    </div>
                    : null
                  }               

                {/* Login */}
                {
                  showLogin ?
                  <div className={"modal-login-box bg-login"}>
                    <div >
                      <div className="modal-selection-close"><Button onClick={() => close()} buttonStyle="tertiary" ><i class="bi bi-x"></i>Close</Button></div>
                      <div><Button onClick={() => selection()} buttonStyle="tertiary" ><i class="bi bi-arrow-left-short"></i>BACK TO SELECTION</Button></div>                    
                      
                      <div id="login-container" className="modal-auth-footer">
                        <div className="login-user">
                          {
                            showTeacherLogin ? <h1 className="h3-heading">Log in to <span className="login-user-label">Teacher</span> Portal</h1> : null
                          }
                          {
                            showStudentLogin ? <h1 className="h3-heading">Log in to <span className="login-user-label">Student</span> Portal</h1> : null
                          }

                          <p className="body-2">Welcome! Please enter your registered email and password to continue.</p>

                          <form>
                            <div class="mb-3">
                              <label for="formGroupExampleInput" class="form-label label-med">Username</label>
                              <input type="text" class="form-control col-md-4" id="formGroupExampleInput"/>
                            </div>
                            <div class="mb-3">
                              <label for="formGroupExampleInput2" class="form-label label-med">Password</label>
                              <input type="text" class="form-control col-md-4" id="formGroupExampleInput2"/>
                            </div>
                            <div className="login-submit">
                              <Button type="submit" buttonStyle="primary">LOGIN</Button>  
                            </div>                       
                          </form>
                          {
                            showTeacherLogin ? <p className="body-2">Don't have an account yet? <i className="label-med login-user-label">Sign Up</i></p> : null
                          }
                        </div>
                      </div>
                    </div>
                  </div>                 
                  : null
                }               
            </div>, document.getElementById("modal-root"))
    }

    return null

})

export default Modal