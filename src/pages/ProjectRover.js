import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import imag1 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/finalimagerover.jpeg';
import imga2 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/front_case.jpeg';
import imga3 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/point_cld1.jpeg';
import imga4 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/pr_cld2.jpeg';
import imga5 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/rtabmap_apriltag1.jpeg';
import imga6 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/WhatsApp Image 2026-05-14 at 1.13.50 PM (1).jpeg';
import imga7 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/WhatsApp Image 2026-05-14 at 1.13.50 PM.jpeg';
import imga8 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/WhatsApp Image 2026-05-14 at 1.13.51 PM (1).jpeg';
import imga9 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/WhatsApp Image 2026-05-14 at 1.13.51 PM (2).jpeg';
import imga10 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/WhatsApp Image 2026-05-14 at 1.13.51 PM.jpeg';
import vid1 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/outdoor_mapping.mp4'
import vid2 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/rover_functioning.mp4'
import vid3 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/mapping.mp4'
import vid4 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/nav1.mp4'
import vid5 from '/home/creator/Portfolio_Code/src/assets/IIT_assets/nav2.mp4'
const ProjectRover = () => (
  <div className="project-page">
    <h1>Fully Functional Autonomous Rover </h1>
    
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' ,textAlign: 'justify'}}>
      This page is a reflection of all the work thats has been done during my 6-month internship at CART department at IIT-Delhi.
      The entire rover was built by me from scratch and all the software integration work was also done by me.The rover can perform 3D mapping using ORB algorithm through RTAB and then perform localization and navigation simultaneously.
      The software was mostly dependent on the ROS2 packages and repositories.The rover aditionally uses April tags as Landmarks for localization and drift correction.
      Below picture shows the entire completed rover the slider lids are removed to get a better look at the internal electronics .
    </p>

    <img
      src={imag1}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />

    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' ,textAlign: 'justify'}}>
      The below picture shows the hetson Orin AGX being enclosed in a 3D printed case,along with arduino and IMU.
    </p>

    <img
      src={imga2}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' ,textAlign: 'justify'}}>
      The below is a video demonstrating the rover performing motion and streaming video data.
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
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem',textAlign: 'justify' }}>
      The below video shows the rover performing the 3D mapping of the environment.It primarily uses ORB feature detection.During mapping the Apriltagsare also visible.
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
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' ,textAlign: 'justify'}}>
      The below is the Output collected during the mapping process.It shows the 2D graph map and also the 3D point cloud maps are shown.
      The yellow coloured points in the map indicate detection of AprilTags as Landmarks.The april tags were kept in different areas in the environment for landmark purposes.
    </p>
    <img
      src={imga3}
      alt="RTAB-Map Output "
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <img
      src={imga4}
      alt="RTAB-Map Output "
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <img
      src={imga5}
      alt="RTAB-Map Output "
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <img
      src={imga6}
      alt="RTAB-Map Output "
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <img
      src={imga7}
      alt="RTAB-Map Output "
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <img
      src={imga8}
      alt="RTAB-Map Output "
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <img
      src={imga9}
      alt="RTAB-Map Output 2"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <img
      src={imga10}
      alt="RTAB-Map Output 2"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '2rem 0',
        boxShadow: '0 0 12px rgba(0,0,0,0.4)'
      }}
    />
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' ,textAlign: 'justify'}}>
      The below is the video demonstrating the mapping ,navigation and localization being performed in an outdoor environment.
    </p>

    {/* RTAB-Map Image 2 */}
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
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
    <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem' ,textAlign: 'justify'}}>
      The below video demonstrates the navigation process ,where a goal point is placed in Rviz and then the path published.
    </p>

    {/* RTAB-Map Image 3 */}
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
            <source src={vid4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
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
            <source src={vid5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>


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

export default ProjectRover;
