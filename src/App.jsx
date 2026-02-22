import { ThemeProvider } from './context/ThemeContext';
import MetaballScene from './components/MetaballScene';
import FluidDynamics from './components/FluidDynamics';
import OrganicShapes from './components/OrganicShapes';
import InteractiveForms from './components/InteractiveForms';
import MotionStudies from './components/MotionStudies';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app" id="hero">
        <MetaballScene />
        <FluidDynamics />
        <OrganicShapes />
        <InteractiveForms />
        <MotionStudies />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
