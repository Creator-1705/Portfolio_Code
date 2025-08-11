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

const ProjectROS2 = () => (
  <div className="project-page">
    <h1>ROS2 SLAM using RTAB-Map</h1>
    
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      A mobile robot that performs SLAM using RTAB-Map in a ROS 2 framework. It integrates Depth Camera ,Odometery and IMU
      to create real-time 3D maps and track its position.
      Below is the video of the robot sending its camera,imu and odometery data
    </p>

    <div style={{ margin: '2rem 0', textAlign: 'left' }}>
      <video width="640" height="auto" controls style={{ maxWidth: '100%', borderRadius: '12px' }}>
        <source src={slamVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      The robot uses Arducam TOF camera for the depth data. Below is the RAW Depth data from the camera.  
    </p>

    <img
      src={ros2Image}
      alt="ROS2 SLAM robot"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />

    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      The depth data from the camera is sent to the PC/Laptop through UDP Port .The depth data is converted to uint16 (As per rtab requirement)
      format and then recieved and used in the mapping. below is the output from ROS2 topics.  
    </p>

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
        <source src={slamVideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      The IMU, Odom, Depth,RGB data all were combined for the 3D mapping . below is the video for the first test result from the RTAB Package.
    </p>

    <div style={{ margin: '2rem 0', textAlign: 'left' }}>
      <video width="640" height="auto" controls style={{ maxWidth: '100%', borderRadius: '12px' }}>
        <source src={slamVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      The following are some of the RTAB-Map mapping outputs during different test runs:
    </p>

    {/* RTAB-Map Image 1 */}
    <img
      src={rtabmap1}
      alt="RTAB-Map Output 1"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' }}>
      Description for RTAB-Map image 1.
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
      Description for RTAB-Map image 2.
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
      Description for RTAB-Map image 3.
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
      Description for RTAB-Map image 4.
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
      Description for RTAB-Map image 5.
    </p>

    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>
      The results uploaded above are older and the new results will be uploaded after the project is completed with localization. The project is about to be finished and the new results are far more promising.
      Stay tuned for the end results.
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
