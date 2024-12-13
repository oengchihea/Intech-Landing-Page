import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import CTASection from './components/CTASection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="products">
          <SolutionsSection />
        </div>
        <CTASection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;

