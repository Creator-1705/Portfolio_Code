import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import conf_matrix from '/home/creator/Portfolio_Code/src/assets/drone_Assets/conf_matrix.jpeg';
import dcl from '/home/creator/Portfolio_Code/src/assets/drone_Assets/dronecloseup.jpeg';
import dld from '/home/creator/Portfolio_Code/src/assets/drone_Assets/dronellmdisp.jpeg';
import llm1 from '/home/creator/Portfolio_Code/src/assets/drone_Assets/llm1.jpeg';
import llm2 from '/home/creator/Portfolio_Code/src/assets/drone_Assets/llm2.jpeg';
import llm3 from '/home/creator/Portfolio_Code/src/assets/drone_Assets/llm3.jpeg';
import llmt1 from '/home/creator/Portfolio_Code/src/assets/drone_Assets/llmtest1.mp4';
import llmt2 from '/home/creator/Portfolio_Code/src/assets/drone_Assets/llmtest2.mp4';
import llmt3 from '/home/creator/Portfolio_Code/src/assets/drone_Assets/llmtest3.mp4';
import llmt4 from '/home/creator/Portfolio_Code/src/assets/drone_Assets/llmtest4.mp4';
import px4d from '/home/creator/Portfolio_Code/src/assets/drone_Assets/px4disp.jpeg';
import test from '/home/creator/Portfolio_Code/src/assets/drone_Assets/test.jpeg';
import immg from '/home/creator/Portfolio_Code/src/assets/drone_Assets/WhatsApp Image 2026-05-15 at 11.32.12 AM (9).jpeg';
import workflow from '/home/creator/Portfolio_Code/src/assets/drone_Assets/workflow.jpeg';
import xrce from '/home/creator/Portfolio_Code/src/assets/drone_Assets/xrce.jpeg';

const Project5G = () => (
  <div className="project-page" style={{ padding: '2rem', color: '#ccc', maxWidth: '900px', margin: '0 auto' }}>
    <h1 style={{ color: '#fff', marginBottom: '1.5rem' }}>
      NLP-Integrated Autonomous Drone Control
    </h1>
    
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
      This project developed a fully integrated Natural Language Processing (NLP) pipeline bridged 
      with a drone control system, enabling seamless human-robot interaction via voice commands. 
    </p>

    <div className="architecture-steps" style={{ textAlign: 'left' }}>
      <section style={{ marginBottom: '1.5rem' }}>
        <h3>1. Voice Activation & Speech-to-Text</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Custom Wake-Word Detection:</strong> Initialized the system using a model trained on personalized voice recordings.</li>
          <li><strong>Transcription:</strong> Utilized Whisper STT for high-fidelity text conversion.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h3>2. Intent Classification via Custom Transformers</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Custom Transformer Model:</strong> Processed text via an architecture trained on 3,000 sentences.</li>
          <li><strong>NLU Robustness:</strong> Maps "Fire up the chopper" to formal take-off commands.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h3>3. Command Execution & Communication</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>ROS2 Integration:</strong> Translated intents into actionable drone API calls.</li>
          <li><strong>UDP Transmission:</strong> Low-latency control over User Datagram Protocol.</li>
        </ul>
      </section>
    </div>

    <hr style={{ border: '0.5px solid #444', margin: '2rem 0' }} />

    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#bbb' }}>
      The image below shows the overall workflow of the system.
    </p>

    <img
      src={workflow}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />

    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#bbb' }}>
      The image below shows the simulation outputs,where the wake-word,STT and the trained transformers were integrated witht ROS2 and Gazebo .
      The simulation was performed using the PX4 autopilot drone model in Gazebo.
    </p>
  
    {/* Image 2: Hardware Enclosure */}
    <img
      src={px4d}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={dcl}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={dld}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={llm1}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={llm2}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={llm3}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={llm3}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#bbb' }}>
      The image below shows the usage od the xrce middleware software for the communication of data to the drone since it is being run as a simulation.
    </p>
    <img
      src={xrce}
      alt="XRCE middleware"
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={test}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />
    <img
      src={immg}
      style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        margin: '1rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        display: 'block'
      }}
    />

    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#bbb' }}>
      The following videos below show the testion of the entire system starting with the wake-word model,STT,intent model,command mapping and final action.
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
            <source src={llmt1} type="video/mp4" />
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
            <source src={llmt2} type="video/mp4" />
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
            <source src={llmt3} type="video/mp4" />
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
            <source src={llmt4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>


  </div>

);

export default Project5G;