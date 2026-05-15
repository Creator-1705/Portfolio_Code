// src/pages/Home.js
import React from 'react';
import './Home.css';
import profilePic from '/home/creator/Portfolio_Code/src/assets/profilepic.jpeg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content" style={{ transform: 'translateY(-40px)' }}>
        <div className="right-text">

          <div className="profile-container">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>

          <h1>Hello, I am V Kathirgamam</h1>
          <p className="subtitle">robotics and electronics nerd</p>

        </div>
      </div>
    </section>
  );
};

export default Home;