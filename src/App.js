import Navbar from './components/landingpage/Navbar'
import LandingPageSplash from './components/landingpage/LandingPageSplash'
import LandingPageSectionFeature from './components/landingpage/LandingPageSectionFeature'
import LandingPageDashboard from './components/landingpage/LandingPageDashboard_excluded'
import LandingPageStudentBenefits from './components/landingpage/LandingPageStudentBenefits'
import LandingPageCTA from './components/landingpage/LandingPageCTA'
import LandingSectionTeacherBenefits from './components/landingpage/LandingSectionTeacherBenefits'
import LandingPageFooter from './components/landingpage/LandingPageFooter'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/main.css'

function App() {
  return (
      <div className="bg-splash">
      <Navbar />
      <LandingPageSplash />
      <LandingPageSectionFeature />
      <LandingPageStudentBenefits />
      <LandingSectionTeacherBenefits />
      <LandingPageCTA />
      <LandingPageFooter />
      </div>
  );
}

export default App;
