import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-subsection">
          <h3><FaEnvelope /> Gmail</h3>
          <p>
            <a href="mailto:kathirgamam.v2022@vitstudent.ac.in">
              kathirgamam.v2022@vitstudent.ac.in
            </a>
          </p>
        </div>

        <div className="contact-subsection">
          <h3><FaLinkedin /> LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/kathirgamam-venkatesan-19675a285"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/kathirgamam-venkatesan-19675a285
            </a>
          </p>
        </div>

        <div className="contact-subsection">
          <h3>Other Platforms</h3>
          <ul>
            <li>
              <FaYoutube />{' '}
              <a
                href="https://www.youtube.com/@kayy1524"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <FaGithub />{' '}
              <a
                href="https://github.com/Creator-1705"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
