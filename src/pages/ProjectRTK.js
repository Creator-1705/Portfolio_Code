import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import img1 from '../assets/ec1.jpg';
import img2 from '../assets/ec2.jpg';
import img3 from '../assets/amp1.jpg';
import img4 from '../assets/powamp1.jpg';
import img5 from '../assets/powamp2.jpg';
import img6 from '../assets/ht1.jpg';
import img7 from '../assets/ht2.jpg';

const ProjectRTK = () => (
  <div className="project-page">
    <h1>Electronics Circuits</h1>
    <p>
      A collection of custom-built electronics circuits involving analog and digital systems including power regulation,
      audio amplification, and wireless communication. Designed using tools like KiCad, LTSpice and implemented on breadboards
      and PCBs.
    </p>

    {/* Arduino Tx/Rx Module */}
    <h2 style={{ fontSize: '1.2rem', marginTop: '2rem', color: '#ccc' }}>Arduino Nano Transmitter & Receiver</h2>
    <p style={{ color: '#ccc' }}>
      Transmitter and receiver module using Arduino Nano, featuring custom power regulation circuitry for reliable communication.
    </p>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'flex-start',
      marginBottom: '2rem'
    }}>
      <img src={img1} alt="Arduino Tx" style={imgStyle} />
      <img src={img2} alt="Arduino Rx" style={imgStyle} />
    </div>

    {/* Low-Noise Amplifier */}
    <h2 style={{ fontSize: '1.2rem', color: '#ccc' }}>Low-Noise Op-Amp Amplifier</h2>
    <p style={{ color: '#ccc' }}>
      Circuit using 741 Op-Amp to build a low-noise amplifier for audio and signal processing.
    </p>
    <div style={imgContainerStyle}>
      <img src={img3} alt="Op-Amp Amplifier" style={imgStyle} />
    </div>

    {/* TDA Power Amplifier */}
    <h2 style={{ fontSize: '1.2rem', color: '#ccc' }}>TDA2002 Power Amplifier</h2>
    <p style={{ color: '#ccc' }}>
      A compact audio amplifier built using TDA2002 IC capable of driving small speakers. Ideal for DIY radios and embedded audio.
    </p>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'flex-start',
      marginBottom: '2rem'
    }}>
      <img src={img4} alt="TDA Amplifier 1" style={imgStyle} />
      <img src={img5} alt="TDA Amplifier 2" style={imgStyle} />
    </div>

    {/* HT12E/HT12D RF Communication */}
    <h2 style={{ fontSize: '1.2rem', color: '#ccc' }}>Digital Wireless Communication - HT12E & HT12D</h2>
    <p style={{ color: '#ccc' }}>
      A digital wireless data transmission system using HT12E Encoder and HT12D Decoder ICs, commonly used for remote control applications.
    </p>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'flex-start',
      marginBottom: '2rem'
    }}>
      <img src={img6} alt="HT Module 1" style={imgStyle} />
      <img src={img7} alt="HT Module 2" style={imgStyle} />
    </div>

    {/* Back Button */}
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Link
        to="/"
        className="view-button"
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '30px',
          backgroundColor: '#00bcd4',
          color: '#000',
          fontWeight: 'bold',
          textDecoration: 'none',
          transition: 'background-color 0.3s ease',
        }}
      >
        ← Back to Portfolio
      </Link>
    </div>
  </div>
);

// Shared image style
const imgStyle = {
  width: '100%',
  maxWidth: '280px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
  objectFit: 'cover'
};

const imgContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'flex-start',
  marginBottom: '2rem'
};

export default ProjectRTK;
