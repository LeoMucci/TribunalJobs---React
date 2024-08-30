import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import VideoSection from './components/VideoSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import ExperimenteSection from './components/ExperimenteSection';
import Footer from './components/Footer'; // Certifique-se de que o Footer está sendo importado aqui

const App = () => {
  return (
    <>
      <div className="App">
      <main className="flex overflow-hidden flex-col bg-zinc-300">
        <Header />
        
          <HeroSection />
          <ServicesSection />
          <VideoSection />
          <TestimonialsSection />
          <TeamSection />
          <ExperimenteSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
