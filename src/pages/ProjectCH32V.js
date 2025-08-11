import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import Image1 from '../assets/stm2.jpg';
import Image2 from '../assets/stm3new.jpg';
import Image3 from '../assets/stm4.jpg';
import Image4 from '../assets/stm5.jpg';
import vid from '../assets/stm1vid.mp4';

const ProjectCH32V = () => (
  <div className="project-page">
    <h1>Microcontroller / Processor Based Projects</h1>
    <p>
      A collection of projects involving microcontrollers like CH32V, STM32, and Arduino. These include real-time sensor fusion,
      GUI development on low-power devices, and robust embedded systems for automation and robotics.
    </p>

    {/* STM Video with description */}
    <div style={{ margin: '2rem 0' }}>
      <p><strong>STM32 Sensor Fusion Board:</strong> STM32 board performing fusion of Galvanic skin response sensor and Spo2,heart rate sensor data in real-time and showing the values in TFT Display.</p>
      <video width="100%" controls style={{ maxWidth: '360px', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.4)' }}>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* First STM Image */}
    <div style={{ margin: '2rem 0' }}>
      <img
        src={Image1}
        alt="STM32 Board"
        style={{
          width: '100%',
          maxWidth: '300px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
          objectFit: 'cover'
        }}
      />
    </div>

    {/* Remaining STM images with descriptions */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: '2rem 0' }}>
      <div>
        <p><strong>STM32 Display Output:</strong> simple lock sutomation using stm</p>
        <img
          src={Image2}
          alt="STM Display"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '12px',
            boxShadow: '0 0 12px rgba(0,0,0,0.4)',
            objectFit: 'cover'
          }}
        />
      </div>

      <div>
        <p><strong>Bluetooth integration with STM32</strong> STM32 integrated with bluetooth with phone output</p>
        <img
          src={Image3}
          alt="STM Sensor Test"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '12px',
            boxShadow: '0 0 12px rgba(0,0,0,0.4)',
            objectFit: 'cover'
          }}
        />
      </div>

      <div>
        <img
          src={Image4}
          alt="STM PCB"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '12px',
            boxShadow: '0 0 12px rgba(0,0,0,0.4)',
            objectFit: 'cover'
          }}
        />
      </div>
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

export default ProjectCH32V;
