import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQF3xJLKyOZc3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704158573123?e=1749081600&v=beta&t=3n4toeK28RsRTmII0mfxFShUMf77qw8XgtJLsGE9uMI" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/SchwandersC" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/charlie-neuen/" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
          </div>
          <h1>Charlie Neuenschwander</h1>
          <a href="#contact" className="contact-link">
           AI, automation, and insights—tailored to your needs
          </a>
          
          <div className="mobile_social_icons">
            <a href="https://github.com/SchwandersC" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/charlie-neuen/" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
