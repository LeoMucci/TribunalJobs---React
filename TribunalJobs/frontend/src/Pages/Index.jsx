import React from 'react';
import Header from '../components/LandingPage/Header';
import HeroSection from '../components/LandingPage/HeroSection';
import ServicesSection from '../components/LandingPage/ServicesSection';
import VideoSection from '../components/LandingPage/VideoSection';
import TeamSection from '../components/LandingPage/TeamSection';
import TestimonialsSection from '../components/LandingPage/TestimonialsSection';
import ExperimenteSection from '../components/LandingPage/ExperimenteSection';
import Footer from '../components/LandingPage/Footer/Footer';

const IndexPage = () => {
  return (
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
  );
};

export default IndexPage;
