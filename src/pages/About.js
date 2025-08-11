import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Ensure this image exists in your assets

const About = () => {
  return (
    <section className="about-section">
    

      <h2 className="about-title">About Me</h2>

      <div className="about-text">
        <p>
          I'm <strong>V Kathirgamam</strong>, a robotics and electronics enthusiast driven by a passion for building intelligent systems that interact meaningfully with the physical world.
          I’m currently pursuing a Bachelor's degree in <strong>Electronics and Communication Engineering</strong> at <strong>Vellore Institute of Technology, Chennai</strong> (graduating in 2026),
          with a strong focus on autonomous robotics, embedded systems, and AI integration.
        </p>

        <p>
          My experience spans diverse hands-on projects, including <strong>ROS 2-based SLAM</strong>, <strong>RTAB-Map localization</strong>, autonomous underwater vehicles (AUVs),
          and drones integrating IMUs, LiDAR, and vision-based navigation. I enjoy building solutions from the ground up—from PCB design and firmware (8051, STM32, ESP32, CH32V, Arduino) to AI models using <strong>TensorFlow </strong>
          deployed on <strong>Raspberry Pi</strong> and <strong>Jetson Nano</strong>.
        </p>

        <p>
          I actively contribute to robotics clubs and interdisciplinary research projects involving sensor fusion, circuit design, <strong>ROS simulations</strong>, and real-time control systems.
          Whether it's building GUIs for microcontrollers or simulating agents in <strong>Gazebo</strong>, I love solving real-world challenges at the intersection of hardware and software.
        </p>

        <p>
          Currently, I’m focused on developing <strong>autonomous robotic systems</strong> using SLAM and sensor fusion for real-time, robust navigation in dynamic environments.
        </p>
      </div>
    </section>
  );
};

export default About;
