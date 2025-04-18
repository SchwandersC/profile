// src/components/Main.tsx
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/KeyboardArrowDown';
import profile from '../assets/images/profile-pic.png';
import '../assets/styles/Main.scss';

const Main: React.FC = () => {
  return (
    <div className="container">
      <section className="about-section">
        <div className="image-wrapper">
          <img
            src={profile}
            alt="Avatar"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/SchwandersC" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/charlie-neuen/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          
          <h1 className="animated-name">Charlie Neuenschwander</h1>
          <div className="text-glass">
            <p className="tagline">Data driven solutions for lasting business value</p>
            <p className="cta-line">See how AI and automation can maximize your performance.</p>
            <a href="#contact" className="cta-small-button">
              Get In Touch<ArrowDownwardIcon />
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/SchwandersC" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/charlie-neuen/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
