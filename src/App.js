import Navbar from './components/landingpage/Navbar'
import LandingPageSplash from './components/landingpage/LandingPageSplash'
import LandingPageSectionAbout from './components/landingpage/LandingPageSectionAbout'
import LandingPageBenefits from './components/landingpage/LandingPageBenefits'
import LandingPageCTA from './components/landingpage/LandingPageCTA'
import LandingSectionFeatures from './components/landingpage/LandingSectionFeatures'
import LandingPageFooter from './components/landingpage/LandingPageFooter'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/main.css'

function App() {
  return (
  <div className="bg-splash">  
    <Navbar />  
      <LandingPageSplash />
      <LandingPageSectionAbout />
      <LandingPageBenefits />
      <LandingSectionFeatures />
      <LandingPageCTA />
      <LandingPageFooter />  
  </div>
  );
}

export default App;
