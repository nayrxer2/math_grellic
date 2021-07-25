import React, {forwardRef, useImperativeHandle} from 'react'
import ReactDOM from 'react-dom'
import '../../styles/modal-auth.css'
import imgTeacher from '../../images/teacher-img.png' 
import imgStudent from '../../images/student-img.png'
import {Button} from '../Button'
import logo from '../../images/logo-brand.png' 

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = React.useState(false)
    const [showSelection, setShowSelection] = React.useState(true)
    const [showLogin, setShowLogin] = React.useState(false)
    const [showTeacherLogin, setshowTeacherLogin] = React.useState(false)
    const [showStudentLogin, setShowStudentLogin] = React.useState(false)
    const [showSignup, setShowSignup] = React.useState(false)

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
        setShowSignup(false)
    }

    const selection = (currentUser) => {
      if(showSelection){
        setShowSelection(false)
        setShowLogin(true)
      }else{
        setShowSelection(true)
        setShowLogin(false)
        setShowSignup(false)
      }

      if (currentUser === "Teacher"){
        setshowTeacherLogin(true)
        setShowStudentLogin(false)
      }else{
        setshowTeacherLogin(false)
        setShowStudentLogin(true)
      }
    }

    const signup = () => {
      if (showSignup){
        setShowSignup(false)
        setShowLogin(true)
      }else{
        setShowSignup(true)
        setShowLogin(false)
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
                      <div className="modal-selection-close"><Button onClick={() => close()} buttonStyle="tertiary" buttonSize="large"><i className="bi bi-x"></i>Close</Button></div>
                      <img className="brand-logo" src={logo} alt=""/>
                      <div id="selection-container" className="modal-auth-footer">
                          <h1 className="h3-heading text-center selection-header text-high">Which one are you?</h1>
                          <p className="body-2 text-center mb-5 text-med">Select your role in the classroom to login</p>

                          <div className="row justify-content-center text-center">
                            <div onClick={() => selection("Teacher")} className="card-selection col-lg-3 col-md-12">
                              <img className="img-fluid selection-img" src={imgTeacher} alt=""/>
                              <h4 className="subheading-bold selection-label txt-secondary">Teacher</h4>
                            </div>
                              
                            <div onClick={() => selection("Student")} className="card-selection col-lg-3 col-md-12">
                              <img className="img-fluid selection-img" src={imgStudent} alt=""/>
                              <h4 className="subheading-bold selection-label txt-secondary">Student</h4>  
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
                      <div className="modal-selection-close"><Button onClick={() => close()} buttonStyle="tertiary" ><i className="bi bi-x"></i>Close</Button></div>
                      <div><Button onClick={() => selection()} buttonStyle="tertiary" ><i className="bi bi-arrow-left-short"></i>BACK TO SELECTION</Button></div>                    
                      
                      <div id="login-container" className="modal-auth-footer">
                        <div className="login-user">
                          {
                            showTeacherLogin ? <h1 className="h3-heading text-high">Log in to <span className="login-user-label">Teacher</span> Portal</h1> : null
                          }
                          {
                            showStudentLogin ? <h1 className="h3-heading text-high">Log in to <span className="login-user-label">Student</span> Portal</h1> : null
                          }

                          <p className="body-2 text-med">Welcome! Please enter your registered email and password to continue.</p>

                          <form>
                            <div className="mb-3">
                              <label for="formGroupExampleInput" className="form-label label-med text-high">Username</label>
                              <input type="text" className="form-control col-md-4" id="formGroupExampleInput"/>
                            </div>
                            <div className="mb-3">
                              <label for="formGroupExampleInput2" className="form-label label-med text-high">Password</label>
                              <input type="text" className="form-control col-md-4" id="formGroupExampleInput2"/>
                            </div>
                            <div className="mb-3">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                            <label className="form-check-label body-2 text-med" for="invalidCheck2">
                              Remember me
                            </label>
                            </div>
                            </div> 
                            <div className="auth-submit">
                              <Button type="submit" buttonStyle="primary">LOGIN</Button>  
                            </div>                       
                          </form>
                          {
                            showTeacherLogin ? <p className="body-2 text-med">Don't have an account yet? <span onClick={() => signup()} className="label-med login-user-link">Sign Up</span></p> : null
                          }
                        </div>
                      </div>
                    </div>
                  </div>                 
                  : null
                } 
                {/* Signup*/}
                {
                  showSignup ?
                  <div className={"modal-signup-box bg-teacher-signup"}>
                    <div >
                      <div className="modal-selection-close"><Button onClick={() => close()} buttonStyle="tertiary" ><i className="bi bi-x"></i>Close</Button></div>
                      <div><Button onClick={() => selection()} buttonStyle="tertiary" ><i className="bi bi-arrow-left-short"></i>BACK TO SELECTION</Button></div>                    
                      
                      <div id="login-container" className="modal-auth-footer">
                        <div className="login-user">
                          <h1 className="h3-heading text-high">Sign Up</h1>
                          <p className="body-2 text-med">Let's sign you up! Please fill in the fields to start.</p>

                          <form className="row g-3">
                          <div className="col-md-4">
                            <label for="validationDefault01" className="form-label label-med text-high">First name</label>
                            <input type="text" className="form-control" id="validationDefault01" required/>
                          </div>
                          <div className="col-md-4">
                            <label for="validationDefault02" className="form-label label-med text-high">Last name</label>
                            <input type="text" className="form-control" id="validationDefault02" required/>
                          </div>
                          <div className="col-md-4">
                          <label for="validationDefault03" className="form-label label-med text-high">Teacher's ID</label>
                          <div className="input-group">
                            <input type="text" className="form-control" id="validationDefault03"  aria-describedby="inputGroupPrepend2" required/>
                          </div>
                          </div>
                          <div className="col-md-6 sign-up-form-spacing">
                            <label for="validationDefaultUsername" className="form-label label-med text-high">Username</label>
                            <input type="text" className="form-control" id="validationDefaultUsername" required/>
                          </div>
                          <div className="col-md-6 sign-up-form-spacing">
                            <label for="validationDefault05" className="form-label label-med text-high">Email Address</label>
                            <input type="text" className="form-control" id="validationDefault05" required/>
                          </div>
                          <div className="w-100"></div>
                          <div className="col-md-6 sign-up-form-spacing">
                            <label for="validationDefault03" className="form-label label-med text-high">Password</label>
                            <input type="text" className="form-control" id="validationDefault03" required/>
                          </div>
                          <div className="col-md-6 sign-up-form-spacing">
                            <label for="validationDefault05" className="form-label label-med text-high">Confirm Password</label>
                            <input type="text" className="form-control" id="validationDefault05" required/>
                          </div>
                          <div className="auth-submit col-12">
                            <Button type="submit" buttonStyle="primary">SIGN UP</Button>  
                          </div>                       
                          </form>
                          {
                            showTeacherLogin ? <p className="body-2 text-med">Already have an account? <span onClick={() => signup()} className="label-med login-user-link">Log In</span></p> : null
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