import Navbar from './components/landingpage/Navbar'
import LandingPageSplash from './components/landingpage/LandingPageSplash'
import LandingPageSectionAbout from './components/landingpage/LandingPageSectionAbout'
import LandingPageBenefits from './components/landingpage/LandingPageBenefits'
import LandingPageCTA from './components/landingpage/LandingPageCTA'
import LandingSectionFeatures from './components/landingpage/LandingSectionFeatures'
import LandingPageFooter from './components/landingpage/LandingPageFooter'
// dashboard
import StudentDashboard from './components/dashboard/studentdashboard/Dashboard'
import StudentSideNav from './components/dashboard/studentdashboard/Sidenav'
import TeacherDashboard from './components/dashboard/teacherdashboard/Dashboard'
import TeacherSidenav from './components/dashboard/teacherdashboard/Sidenav'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/main.css'
import 'bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>  
      <Switch>
        <Route exact path="/home">
        <div className="bg-splash">
          <Navbar />  
          <LandingPageSplash />
          <LandingPageSectionAbout />
          <LandingPageBenefits />
          <LandingSectionFeatures />
          <LandingPageCTA />
          <LandingPageFooter />
        </div>
        </Route>
        <Route exact path="/student">
          <div className="row">
          <input type="checkbox" id="nav-toggle"/>  
            <StudentSideNav />
            <StudentDashboard />
          </div>
        </Route>
        <Route exact path="/teacher">
        <div className="row">
          <input type="checkbox" id="nav-toggle"/>  
            <TeacherSidenav />
            <TeacherDashboard />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
