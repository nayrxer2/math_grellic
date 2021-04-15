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

      if (currentUser == "Teacher"){
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
                      <div className="modal-selection-close"><Button onClick={() => close()} buttonStyle="tertiary" buttonSize="large"><i class="bi bi-x"></i>Close</Button></div>
                      <img className="brand-logo" src={logo}/>
                      <div id="selection-container" className="modal-auth-footer">
                          <h1 className="h3-heading text-center selection-header">Which one are you?</h1>
                          <p className="body-2 text-center mb-5">Select your role in the classroom to login</p>

                          <div class="row justify-content-center text-center">
                            <div onClick={() => selection("Teacher")} class="card-selection col-lg-3 col-md-12">
                              <img className="img-fluid selection-img" src={imgTeacher}/>
                              <h4 className="subheading-bold selection-label">Teacher</h4>
                            </div>
                              
                            <div onClick={() => selection("Student")} class="card-selection col-lg-3 col-md-12">
                              <img className="img-fluid selection-img" src={imgStudent}/>
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
                            <div class="mb-3">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                            <label class="form-check-label body-2" for="invalidCheck2">
                              Remember me
                            </label>
                            </div>
                            </div> 
                            <div className="auth-submit">
                              <Button type="submit" buttonStyle="primary">LOGIN</Button>  
                            </div>                       
                          </form>
                          {
                            showTeacherLogin ? <p className="body-2">Don't have an account yet? <i onClick={() => signup()} className="label-med login-user-link">Sign Up</i></p> : null
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
                      <div className="modal-selection-close"><Button onClick={() => close()} buttonStyle="tertiary" ><i class="bi bi-x"></i>Close</Button></div>
                      <div><Button onClick={() => selection()} buttonStyle="tertiary" ><i class="bi bi-arrow-left-short"></i>BACK TO SELECTION</Button></div>                    
                      
                      <div id="login-container" className="modal-auth-footer">
                        <div className="login-user">
                          <h1 className="h3-heading">Sign Up</h1>
                          <p className="body-2">Let's sign you up! Please fill in the fields to start.</p>

                          <form class="row g-3">
                          <div class="col-md-4">
                            <label for="validationDefault01" class="form-label label-med">First name</label>
                            <input type="text" class="form-control" id="validationDefault01" required/>
                          </div>
                          <div class="col-md-4">
                            <label for="validationDefault02" class="form-label label-med">Last name</label>
                            <input type="text" class="form-control" id="validationDefault02" required/>
                          </div>
                          <div class="col-md-4">
                          <label for="validationDefault03" class="form-label label-med">Teacher's ID</label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="validationDefault03"  aria-describedby="inputGroupPrepend2" required/>
                          </div>
                          </div>
                          <div class="col-md-6 sign-up-form-spacing">
                            <label for="validationDefaultUsername" class="form-label label-med">Username</label>
                            <input type="text" class="form-control" id="validationDefaultUsername" required/>
                          </div>
                          <div class="col-md-6 sign-up-form-spacing">
                            <label for="validationDefault05" class="form-label label-med">Email Address</label>
                            <input type="text" class="form-control" id="validationDefault05" required/>
                          </div>
                          <div class="w-100"></div>
                          <div class="col-md-6 sign-up-form-spacing">
                            <label for="validationDefault03" class="form-label label-med">Password</label>
                            <input type="text" class="form-control" id="validationDefault03" required/>
                          </div>
                          <div class="col-md-6 sign-up-form-spacing">
                            <label for="validationDefault05" class="form-label label-med">Confirm Password</label>
                            <input type="text" class="form-control" id="validationDefault05" required/>
                          </div>
                          <div className="auth-submit col-12">
                            <Button type="submit" buttonStyle="primary">SIGN UP</Button>  
                          </div>                       
                          </form>
                          {
                            showTeacherLogin ? <p className="body-2">Already have an account? <i onClick={() => signup()} className="label-med login-user-link">Log In</i></p> : null
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