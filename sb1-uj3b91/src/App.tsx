import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;