import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import slamVideo from '../assets/rtabvid1.mp4';
import ros2Image from '../assets/2022-09-26_Arducam_TOF2.avif';
import slamVideo1 from '../assets/arducamtofcamera .mp4';
import slamVideo2 from '../assets/rtabvid2.mp4';
import rtabmap1 from '../assets/rtabmapnew.jpeg';
import rtabmap2 from '../assets/rtabmapnew2.jpeg';
import rtabmap3 from '../assets/rtabmapnew3.jpeg';
import rtabmap4 from '../assets/rtabmapnew4.jpeg';
import rtabmapnew5 from '../assets/rtabmapnew5.jpeg';
import zedcamera from '../assets/zed1Untitled.jpeg';
import newbot from '../assets/post123Untitled.jpeg';
import jetsonnano from '../assets/jetsonUntitled.jpeg';
import jetnano2 from '/home/creator/Portfolio_Code/src/assets/mafkin_assets/WhatsApp Image 2026-05-15 at 2.50.48 PM (1).jpeg';

const ProjectROS2 = () => (
  <div className="project-page">
    <h1>ROS2 SLAM using RTAB-Map</h1>
    
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      The work mainly focues on making a mobile robot that performs SLAM using RTAB-Map in a ROS 2 framework. It integrates Depth Camera ,Odometery and IMU
      to create real-time 3D maps and track its position.The bot was changed during different steps, in the beggining the bot had only a basic RGB camera with IMU and encoders later even better ewuipments were added.
      Below is the video of the robot sending its camera,imu and odometery data
    </p>

    <div style={{ margin: '2rem 0', textAlign: 'left' }}>
      <video width="640" height="auto" controls style={{ maxWidth: '100%', borderRadius: '12px' }}>
        <source src={slamVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      The following are some of the RTAB-Map mapping outputs during different test runs:
    </p>

    <img
      src={zedcamera}
      alt="RTAB-Map Output 5"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      This is the ZED camera that was used for mapping.it mainly provided the Depth and te RGB data.
    </p>

    <img
      src={jetsonnano}
      alt="RTAB-Map Output 5"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      This is the Jetson Orin Nano ,that was used with the zed camera for processing of the depth data and running the RTAB-map application.
    </p>
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      Working on the Jetson.
    </p>
    <img
      src={jetnano2}
      alt="RTAB-Map Output 5"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      This is the pointcloud visualization from the depth data from ZED camera.
    </p>

    {/* RTAB-Map Image 2 */}
    <img
      src={rtabmap2}
      alt="RTAB-Map Output 2"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      RTAB Map package used for 3D mapping
    </p>

    {/* RTAB-Map Image 3 */}
    <img
      src={rtabmap3}
      alt="RTAB-Map Output 3"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      Loop Closure detection in RTAB Map
    </p>

    {/* RTAB-Map Image 4 */}
    <img
      src={rtabmap4}
      alt="RTAB-Map Output 4"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      Partial 3D map generated from the robot and RTAB map
    </p>

    {/* RTAB-Map Image 5 */}
    <img
      src={rtabmapnew5}
      alt="RTAB-Map Output 5"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      RTAB Map Viewer
    </p>

    <div style={{ textAlign: 'center' }}>
      <Link
        to="/"
        className="view-button"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#00bcd4',
          color: '#000',
          fontSize: '1rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          borderRadius: '30px',
          display: 'inline-block',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#008c9e'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#00bcd4'}
      >
        ← Back to Portfolio
      </Link>
    </div>
  </div>
);

export default ProjectROS2;
