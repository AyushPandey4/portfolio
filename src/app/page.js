"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="content-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stats />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
