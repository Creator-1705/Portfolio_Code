import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import { FaPython, FaJava, FaCuttlefish, FaProjectDiagram, FaMicrochip, FaRobot } from 'react-icons/fa';
import {
  SiCplusplus, SiMysql, SiGnubash,
  SiTensorflow, SiKeras, SiOpencv, SiRos, SiRaspberrypi,
  SiGit, SiLinux, SiArduino, SiMbed, SiQt, SiSqlite, SiOpenai, SiNvidia
} from 'react-icons/si';

const programmingLanguages = [
  'Python', 'C++', 'Java', 'SQL', 'Assembly', 'MATLAB'
];

const softwareTools = [
  'TensorFlow', 'Keras', 'PyBullet', 'OpenCV', 'ROS2', 'Gazebo', 'RTAB-Map', 'Nav2Stack',
  'KiCad', 'LTSpice', 'Cadence Virtuoso', 'Linux', 'Git', 'SQLite', 'RPi OS',
  'Arduino IDE', 'keil studio', 'Onshape', 'Onshape to Robot'
];

const microcontrollers = [
  'STM32', 'ESP32', '8051', 'CH32V', 'Arduino', 'Jetson Nano', 'Raspberry Pi'
];

const projects = [
  {
    title: 'ROS2 SLAM using RTAB-Map',
    description: 'A mobile robot using RTAB-Map for SLAM with Odom ,RGB ,Depth data and IMU',
    path: '/projects/ros2-slam'
  },
  {
    title: 'Prosthetic Hand Simulation with ML Classification',
    description: 'Prosthetic hand simulation in PyBullet with machine learning classification and ROS2 Integration',
    path: '/projects/eeg-hand'
  },
  {
    title: 'Ongoing Project',
    description: 'place left for ongoing project',
    path: '/projects/5g-swarm'
  },
  {
    title: 'Basic Robotics Projects',
    description: 'Drones,MazeSolver,HoverCraft ...',
    path: '/projects/event-camera'
  },
  {
    title: 'Microcontroller / microprocessor based Projects',
    description: 'Some of my projects involving Microcontrollers and Processors',
    path: '/projects/ch32v-gui'
  },
  {
    title: 'Electronics Circuits',
    description: 'Some of my work in making different electronics circuits',
    path: '/projects/rtk-rover'
  }
];

const experience = [
  {
    company: 'Mafkin Robotics',
    role: 'Robotics Intern',
    duration: 'May 2025 - Present',
    type: 'On-site',
    description: 'Worked on autonomous navigation and localization using RTAB-Map, ROS 2, and Jetson Nano. Integrated depth cameras and IMU sensors for real-time mapping and implemented UDP streaming pipelines.',
    link: '/experience/mafkin'
  },
  {
    company: 'Dreadnought Robotics',
    role: 'Team Member',
    duration: 'April 2023 - July 2024',
    type: 'On-campus',
    description: 'Special robotics team in VIT University that specializes in AUVs and its automation. Worked on different robots while understanding the basics of the AUVs along with their implementation.'
  },
  {
    company: 'Freelance',
    role: 'Embedded Systems Developer',
    duration: '2023 - Present',
    type: 'Remote',
    description: 'Designed embedded GUIs, CH32V systems, and Python-SQLite dashboards. Focused on low-power systems and sensor fusion for IoT and robotics.'
  }
];

const skillIcons = {
  Python: <FaPython />,
  'C++': <SiCplusplus />,
  Java: <FaJava />,
  SQL: <SiMysql />,
  Assembly: <SiGnubash />,
  MATLAB: <FaProjectDiagram />,

  TensorFlow: <SiTensorflow />,
  Keras: <SiKeras />,
  PyBullet: <FaRobot />,
  OpenCV: <SiOpencv />,
  ROS2: <SiRos />,
  Gazebo: <FaProjectDiagram />,
  'RTAB-Map': <SiRos />,
  Nav2Stack: <SiRos />,
  KiCad: <FaProjectDiagram />,
  LTSpice: <FaProjectDiagram />,
  'Cadence Virtuoso': <FaProjectDiagram />,
  Linux: <SiLinux />,
  Git: <SiGit />,
  SQLite: <SiSqlite />,
  'RPi OS': <SiRaspberrypi />,
  'Arduino IDE': <SiArduino />,
  'keil studio': <FaProjectDiagram />,
  Onshape: <FaProjectDiagram />,
  'Onshape to Robot': <FaRobot />,

  STM32: <FaMicrochip />,
  ESP32: <FaMicrochip />,
  '8051': <FaMicrochip />,
  CH32V: <FaMicrochip />,
  Arduino: <SiArduino />,
  'Jetson Nano': <SiNvidia />,
  'Raspberry Pi': <SiRaspberrypi />
};

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={project.path} className="view-button">
              View
            </Link>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <section className="experience-section">
        <h2 className="left-align">Experience</h2>
        <div className="experience-container">
          {experience.map((exp, index) => (
            <div className="experience-box left-align" key={`exp-${index}`}>
              <h3>{exp.company}</h3>
              <p><strong>{exp.role}</strong> | <em>{exp.duration} ({exp.type})</em></p>
              <p>{exp.description}</p>
              {exp.link && (
                <Link to={exp.link} className="view-button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                  View Work
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-subsection">
            <h3>Programming Languages</h3>
            <div className="skills-grid">
              {programmingLanguages.map((skill, index) => (
                <span className="skill-tag" key={`pl-${index}`}>
                  <span className="icon">{skillIcons[skill]}</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-subsection">
            <h3>Software / Tools</h3>
            <div className="skills-grid">
              {softwareTools.map((tool, index) => (
                <span className="skill-tag" key={`sw-${index}`}>
                  <span className="icon">{skillIcons[tool]}</span>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-subsection">
            <h3>Microcontrollers / Processors</h3>
            <div className="skills-grid">
              {microcontrollers.map((mc, index) => (
                <span className="skill-tag" key={`mc-${index}`}>
                  <span className="icon">{skillIcons[mc]}</span>
                  {mc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
