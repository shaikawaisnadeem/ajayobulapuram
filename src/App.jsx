import React, { useState } from 'react';
import LiquidMetalBackground from './components/shared/LiquidMetalBackground';
import CinematicLoader from './components/shared/CinematicLoader';
import CursorGlow from './components/shared/CursorGlow';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import Journey from './components/sections/Journey';
import Ventures from './components/sections/Ventures';
import Impact from './components/sections/Impact';
import Vision from './components/sections/Vision';
import Voices from './components/sections/Voices';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-transparent text-on-surface font-body-md overflow-x-hidden selection:bg-primary selection:text-on-primary dark">
      <LiquidMetalBackground />
      
      <CinematicLoader onComplete={() => setIsLoaded(true)} />

      {isLoaded && (
        <>
          {/* Interactive Cursor Glow */}
          <CursorGlow />

          {/* TopNavBar */}
          <Navbar />

          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <Mission />

          {/* Founder Journey Timeline */}
          <Journey />

          {/* DR Students Showcase */}
          <Ventures />

          {/* Achievements Section */}
          <Impact />

          {/* Vision Section */}
          <Vision />

          {/* Testimonials */}
          <Voices />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
