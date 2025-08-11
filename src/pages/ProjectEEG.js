import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import img1 from '../assets/sihand1.jpg';
import img2 from '../assets/sihand2.jpg';
import img3 from '../assets/sihand3.jpg';
import img4 from '../assets/sihand4.jpg';
import img5 from '../assets/sihand5.jpg';
import img6 from '../assets/sihand6.jpg';

import sihandv from '../assets/sihandvid.mp4';

const images = [img1, img2];
const images1 = [img3, img4];
const images2 = [img5, img6];

const ProjectEEG = () => (
  <div className="project-page">
    <h1>Prosthetic Hand Simulation with ML</h1>
    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
      Prosthetic hand simulation in PyBullet using ML classification with ROS 2.
      In this project I created a model of 2 hands using Onshape software and then converted them into URDF files by following the Onshape-to-robot nomenclature.
      The URDF file was then imported into ROS 2 and used by PyBullet for simulation. I used PyBullet instead of Gazebo because I’ve already worked with a lot of Gazebo simulations.
      The below pics show the hand model.
    </p>

    {/* Model Images */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      margin: '2rem 0'
    }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`prosthetic-${index}`}
          style={{
            width: '100%',
            borderRadius: '10px',
            objectFit: 'cover',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'
          }}
        />
      ))}
    </div>

    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
      The below pics show importing the URDF models into PyBullet and controlling the joints individually.
    </p>

    {/* URDF Control Images */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      margin: '2rem 0'
    }}>
      {images1.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`prosthetic-${index}`}
          style={{
            width: '100%',
            borderRadius: '10px',
            objectFit: 'cover',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'
          }}
        />
      ))}
    </div>

    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
      The below pictures show the model training and the block diagrams for reference.
    </p>

    {/* Training Images */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      margin: '2rem 0'
    }}>
      {images2.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`prosthetic-${index}`}
          style={{
            width: '100%',
            borderRadius: '10px',
            objectFit: 'cover',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'
          }}
        />
      ))}
    </div>

    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
      The below video shows the complete simulation running using ROS 2.
    </p>

    {/* Simulation Video */}
    <div style={{ margin: '2rem 0', textAlign: 'left' }}>
      <video
        controls
        style={{
          width: '360px',
          height: '640px',
          maxWidth: '100%',
          borderRadius: '12px',
          objectFit: 'contain',
          boxShadow: '0 0 10px rgba(0,0,0,0.4)'
        }}
      >
        <source src={sihandv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

export default ProjectEEG;
