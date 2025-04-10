import React, { useEffect } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python",
  "R",
  "SQL",
  "Julia",
  "Spark",
  "TensorFlow",
  "Power BI"
];

const labelsSecond = [
  "Git",
  "Docker",
  "Azure",
  "AWS",
  "Linux",
  "DataBricks"
];

const labelsThird = [
  "OpenAI",
  "LangChain",
  "NLTK",
  "Hugging Face",
  "LlamaIndex"
];

const implementationFirst = [
  "Time-Series Forecasting",
  "Reccomendation Systems",
  "Fraud Detection"
];

const implementationSecond = [
  "A/B Testing",
  "CI/CD Pipelines",
  "Predictive Maintence"
];

const implementationThird = [
  "Prompt Engineering",
  "Fine-Tuning",
  "RAG",
  "Few-shot learning"
];

function Expertise() {
  useEffect(() => {
    // Get all the individual skill elements inside the skills grid.
    const skillElements = document.querySelectorAll('.skills-grid .skill');
    
    // Create an observer that toggles the "visible" class based on intersection.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.4 } // Adjust threshold as needed.
    );
    
    // Observe each skill element.
    skillElements.forEach(el => observer.observe(el));
    
    // Clean up observer on component unmount.
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            {/* Wrap text-related elements in an accent box */}
            <div className="accent-box">
              <h3>Data Science and ML</h3>
              <p>
                Data piles up fast—and making sense of it isn't easy.
                I specialize in transforming high-volume, messy data into forecasts,
                machine learning models, and dashboards that deliver insight and drive real business value.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
              <div className="flex-chips">
                <span className="chip-title">Implementation:</span>
                {implementationFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <div className="accent-box">
              <h3>Process Optimization</h3>
              <p>
                Whether you're scaling operations or just getting started,
                I deliver automation solutions that streamline workflows,
                remove bottlenecks, and simplify complex processes.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
              <div className="flex-chips">
                <span className="chip-title">Implementation:</span>
                {implementationSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faMeta} size="3x" />
            <div className="accent-box">
              <h3>Generative AI</h3>
              <p>
                Bring modern AI into your workflows with purpose and clarity.
                I build enterprise-grade Gen-AI tools that fit real-world needs and scale with your goals.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
              <div className="flex-chips">
                <span className="chip-title">Implementation:</span>
                {implementationThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
