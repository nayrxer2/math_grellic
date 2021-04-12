import Navbar from './components/landingpage/Navbar'
import LandingPageSplash from './components/landingpage/LandingPageSplash'
import LandingPageSectionFeature from './components/landingpage/LandingPageSectionFeature'
import LandingPageDashboard from './components/landingpage/LandingPageDashboard'
import LandingPageStudentBenefits from './components/landingpage/LandingPageStudentBenefits'
import LandingPageCTA from './components/landingpage/LandingPageCTA'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/main.css'

function App() {
  return (
      <div className="bg-logo">
      <Navbar />
      <LandingPageSplash />
      <LandingPageSectionFeature />
      <LandingPageDashboard />
      <LandingPageStudentBenefits />
        <div className="cta-logo">
          <LandingPageCTA />
        </div>
      </div>
  );
}

export default App;
