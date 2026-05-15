// src/pages/MafkinExperience.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import img1 from '../assets/mafkin12.jpg';
import img2 from '../assets/mafkin21.jpg';
import img3 from '/home/creator/Portfolio_Code/src/assets/mafkin_assets/teampic.jpeg';
import img4 from '/home/creator/Portfolio_Code/src/assets/mafkin_assets/swimming pool pic.jpeg';
import img5 from '/home/creator/Portfolio_Code/src/assets/mafkin_assets/uavpic.jpeg';
import img6 from '/home/creator/Portfolio_Code/src/assets/mafkin_assets/WhatsApp Image 2026-05-15 at 2.49.53 PM.jpeg';

const MafkinExperience = () => {

  const imgStyle = {
    width: '100%',
    maxWidth: '520px',
    height: '320px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#ccc',
    textAlign: 'justify',
  };

  return (
    <div className="project-page">
      <h1>Mafkin Robotics Internship</h1>

      <p style={textStyle}>
        During my time at Mafkin Robotics, I worked on a mobile robot platform that performed Visual SLAM using RTAB-Map and ROS 2.
        I integrated RGB-depth camera and an IMU sensor, implemented real-time UDP streaming for remote visualization,
        and developed localization and mapping logic using Nav2Stack and RTAB-map. The robot could navigate autonomously in indoor environments.
        I also worked on the testing and developing the underwater robot there.This page is a reflection of not just the work that was done there but also my experience and the enjoyment i had there.
      </p>

      <p style={textStyle}>
        I also contributed to building pipelines for camera processing, frame transformations, and bag file recording for dataset collection.
      </p>

      <p style={textStyle}>
        Below is a picture of me and the team having food together.
      </p>

      <div>
        <img src={img3} alt="Team Lunch" style={imgStyle} />
      </div>

      {/* Images */}
      <div>
        <img src={img1} alt="SLAM Robot" style={imgStyle} />
        <p style={{ color: '#ccc', fontSize: '1rem', textAlign: 'justify' }}>
          This was the robot for which we created the SLAM software .it attaches to the hull of the ship using magnetic tracks and also performs the ship inspection.
        </p>
      </div>

      <div>
        <img src={img2} alt="Robot testing" style={imgStyle} />
        <img src={img4} alt="Pool testing" style={imgStyle} />
        <p style={{ color: '#ccc', fontSize: '1rem' }}>
          These pictures were taken during the testing of the underwater robot, had some fun time in the swimming pool.
        </p>
      </div>

      <div>
        <img src={img5} alt="Underwater robot prototype" style={imgStyle} />
        <p style={{ color: '#ccc', fontSize: '1rem', textAlign: 'justify' }}>
          This picture contains the under water robot prototype on which all the software testing and development was done.
        </p>
      </div>

      <div>
        <img src={img6} alt="Presentation" style={imgStyle} />
        <p style={{ color: '#ccc', fontSize: '1rem', textAlign: 'justify' }}>
          This picture was taken during a presentation on the different bots that the company is working on.
        </p>
      </div>

      <div style={{ textAlign: 'left', marginTop: '2rem' }}>
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
};

export default MafkinExperience;