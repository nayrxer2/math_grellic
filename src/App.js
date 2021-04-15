import Navbar from './components/landingpage/Navbar'
import LandingPageSplash from './components/landingpage/LandingPageSplash'
import LandingPageSectionAbout from './components/landingpage/LandingPageSectionAbout'
import LandingPageDashboard from './components/landingpage/LandingPageDashboard_excluded'
import LandingPageBenefits from './components/landingpage/LandingPageBenefits'
import LandingPageCTA from './components/landingpage/LandingPageCTA'
import LandingSectionTeacherBenefits from './components/landingpage/LandingSectionTeacherBenefits'
import LandingPageFooter from './components/landingpage/LandingPageFooter'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/main.css'

import {Switch, Route, BrowserRouter, Router} from 'react-router-dom';

function App() {
  return (
  <div className="bg-splash">  
    <Navbar />  
      <LandingPageSplash />
      <LandingPageSectionAbout />
      <LandingPageBenefits />
      <LandingSectionTeacherBenefits />
      <LandingPageCTA />
      <LandingPageFooter />  
  </div>
  );
}

export default App;
