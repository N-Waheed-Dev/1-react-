import Nav from './assets/components/Nav.jsx';
import Hero from './assets/components/Hero.jsx';
import HostingPlans from './assets/components/HostingPlans.jsx';
import AboutSection from './assets/components/AboutSection.jsx';
import SupportSection from './assets/components/SupportSection.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main>
        <Hero />
        <HostingPlans />
        <AboutSection />
        <SupportSection />
      </main>
    </div>
  );
}

export default App;

