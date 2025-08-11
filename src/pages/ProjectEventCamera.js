import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import roneImage from '../assets/drone1.jpg';
import roneImage2 from '../assets/drone2.jpg';
import mazeImage from '../assets/mazesolver.jpg';
import mazeImage1 from '../assets/maze solver.jpg';
import hoverImage from '../assets/hover1.jpg';
import hoverImage2 from '../assets/hover2.jpg';

const ProjectEventCamera = () => (
  <div className="project-page">
    <h1>Basic Robots I Created During My Learning Process</h1>

    <p>
      This page contains robots I have photos of — not all I've made. Unfortunately, many videos are not available.
    </p>

    {/* Drone Section */}
    <p>
      Below is the drone project I worked on using an APM flight controller. It was controlled using a FlySky transmitter and receiver.
      The motors are 2200kv rated and powered by a 2200mAh (30C 3S) LiPo battery.
    </p>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'left',
        margin: '2rem 0',
      }}
    >
      <img
        src={roneImage}
        alt="Drone 1"
        style={{
          width: '100%',
          maxWidth: '280px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
          objectFit: 'cover',
        }}
      />
      <img
        src={roneImage2}
        alt="Drone 2"
        style={{
          width: '100%',
          maxWidth: '280px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Maze Solver Section */}
    <p>
      Below is the Maze Solver robot, which was built using PID control and the LSRB algorithm.
    </p>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'left',
        margin: '2rem 0',
      }}
    >
      <img
        src={mazeImage}
        alt="Maze Solver 1"
        style={{
          width: '100%',
          maxWidth: '280px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
          objectFit: 'cover',
        }}
      />
      <img
        src={mazeImage1}
        alt="Maze Solver 2"
        style={{
          width: '100%',
          maxWidth: '280px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Hovercraft Section */}
    <p>
      I also built a hovercraft using a foam base and three motors — one for lift and others for thrust. 
      It was powered by a LiPo battery and controlled using a Flysky transmitter. It was designed to glide over smooth surfaces.
    </p>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'left',
        margin: '2rem 0',
      }}
    >
      <img
        src={hoverImage}
        alt="Hovercraft 1"
        style={{
          width: '100%',
          maxWidth: '280px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
          objectFit: 'cover',
        }}
      />
      <img
        src={hoverImage2}
        alt="Hovercraft 2"
        style={{
          width: '100%',
          maxWidth: '280px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Centered Back Button */}
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

export default ProjectEventCamera;
