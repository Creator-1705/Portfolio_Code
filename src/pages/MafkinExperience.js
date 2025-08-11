// src/pages/MafkinExperience.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import img1 from '../assets/mafkin12.jpg';
import img2 from '../assets/mafkin21.jpg';

const MafkinExperience = () => (
  <div className="project-page">
    <h1>Mafkin Robotics Internship</h1>
    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
      During my time at Mafkin Robotics, I worked on a mobile robot platform that performed Visual SLAM using RTAB-Map and ROS 2. 
      I integrated a depth camera and an IMU sensor, implemented real-time UDP streaming for remote visualization, 
      and developed localization and mapping logic using Nav2Stack. The robot could navigate autonomously in indoor environments.
      I also worked on the testing and developing the underwater robot there. 
    </p>

    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
      I also contributed to building pipelines for camera calibration, frame transformations, and bag file recording for dataset collection.
    </p>

    {/* Images */}
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src={img1}
        alt="SLAM Robot"
        style={{ width: '100%', maxWidth: '480px', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}
      />
      <p style={{ color: '#ccc', fontSize: '1rem' }}>
        This was the robot for which we created the SLAM software .it attaches to the hull of the ship using magnetic tracks and also performs the ship inspection.
      </p>
    </div>

    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src={img2}
        alt="RViz Visualization"
        style={{ width: '100%', maxWidth: '480px', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}
      />
      <p style={{ color: '#ccc', fontSize: '1rem' }}>
        This picture was during the testing of the underwater robot .
      </p>
    </div>

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
        }}
      >
        ← Back to Portfolio
      </Link>
    </div>
  </div>
);

export default MafkinExperience;
