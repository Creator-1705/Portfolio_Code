// src/pages/MafkinExperience.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import iit1 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit1.jpeg'
import iit2 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit2.jpeg'
import iit3 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit3.jpeg'
import iit4 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit4.jpeg'
import iit5 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit5.jpeg'
import iit6 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit6.jpeg'
import iit7 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit7.jpeg'
import iit8 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit8.jpeg'
import iit9 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit9.jpeg'
import iit10 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit10.jpeg'
import iit11 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit11.jpeg'
import iit12 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit12.jpeg'
import iit13 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit13.jpeg'
import iit14 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit14.jpeg'
import iit15 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit15.jpeg'
import iit16 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit16.jpeg'
import iit17 from '/home/creator/Portfolio_Code/src/assets/IIT_exp_assets/iit17.jpeg'

const IITExperience = () => {

  const imgStyle = {
    width: '100%',
    maxWidth: '520px',
    height: '320px',
    objectFit: 'cover',
    borderRadius: '12px',
    margin: '2rem 0',
    boxShadow: '0 0 12px rgba(0,0,0,0.4)',
  };

  return (
    <div className="project-page">
      <h1>Mafkin Robotics Internship</h1>

      <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem', textAlign: 'justify' }}>
        This section reflects not only my technical work but also my overall experience during my 6-month internship at IIT Delhi. 
        Working in such an intellectually vibrant environment, surrounded by peers with similar drive and capability, significantly boosted my productivity and motivation. 
        The following collection of images captures different moments of my time at IIT Delhi, offering a glimpse into both my professional work and daily life during the internship.
      </p>

      <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem', textAlign: 'justify' }}>
        My work here mainly consisted of developing and designing rover that was capable of performing the SLAM algorithm .
      </p>

      <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem', textAlign: 'justify' }}>
        below are pictures taken during the flight boarding from Chennai.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <img src={iit16} alt="Flight boarding" style={imgStyle} />
        <img src={iit15} alt="Shrouding the heavens" style={imgStyle} />
      </div>

      <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem', textAlign: 'justify' }}>
        Below are the picture taken on the first day of entering IIT.
        The selfie was taken at night and caused the camera to be filled with fog.
        The food pic was taken during my stay at IIT hostel
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <img src={iit12} style={imgStyle} />
        <img src={iit13} style={imgStyle} />
        <img src={iit14} style={imgStyle} />
        <img src={iit17} style={imgStyle} />
      </div>

      <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem', textAlign: 'justify' }}>
        The below picture was taken when the senior was explaining his work .
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <img src={iit8} alt="WORK" style={imgStyle} />
      </div>

      <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem', textAlign: 'justify' }}>
        The stray cat looked cute so took a few pictures of it .The peacocks picture was taken when i was admiring its beauty.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <img src={iit4} style={imgStyle} />
        <img src={iit5} style={imgStyle} />
        <img src={iit2} style={imgStyle} />
        <img src={iit1} style={imgStyle} />
        <img src={iit7} style={imgStyle} />
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

export default IITExperience;