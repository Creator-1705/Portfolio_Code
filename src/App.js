import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NeuralBackground from './components/NeuralBackground';
import './App.css';

import ProjectROS2 from './pages/ProjectROS2';
import ProjectEEG from './pages/ProjectEEG';
import Project5G from './pages/Project5G';
import ProjectEventCamera from './pages/ProjectEventCamera';
import ProjectCH32V from './pages/ProjectCH32V';
import ProjectRTK from './pages/ProjectRTK';
import MafkinExperience from './pages/MafkinExperience';

// 📦 GA setup
import { initGA, logPageView } from './ga';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <>
      <NeuralBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <main>
            <Element name="home" id="home">
              <Home />
            </Element>

            <hr className="page-divider" />

            <Element name="about" id="about">
              <About />
            </Element>

            <hr className="page-divider" />

            <Element name="portfolio" id="portfolio">
              <Portfolio />
            </Element>

            <hr className="page-divider" />

            <Element name="contact" id="contact">
              <Contact />
            </Element>
          </main>
        } />

        {/* Individual project pages */}
        <Route path="/projects/ros2-slam" element={<ProjectROS2 />} />
        <Route path="/projects/eeg-hand" element={<ProjectEEG />} />
        <Route path="/projects/5g-swarm" element={<Project5G />} />
        <Route path="/projects/event-camera" element={<ProjectEventCamera />} />
        <Route path="/projects/ch32v-gui" element={<ProjectCH32V />} />
        <Route path="/projects/rtk-rover" element={<ProjectRTK />} />
        <Route path="/experience/mafkin" element={<MafkinExperience />} />
      </Routes>
    </>
  );
}

export default App;
