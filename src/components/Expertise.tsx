// src/components/Expertise.tsx
import React, { useEffect } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const dsOutcomeLabels = [
  "Cost reduction",
  "Revenue Growth",
  "Data‑Driven Decisions"
];

const procOutcomeLabels = [
  "Resource Efficiency",
  "Time Savings",
  "Scalability",
  "Consistency"
];

const genProcessesLabels = [
  "Data entry",
  "Data collection",
  "Information Retrieval"
];

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
  "Time‑Series Forecasting",
  "Recommendation Systems",
  "Fraud Detection"
];

const implementationSecond = [
  "A/B Testing",
  "CI/CD Pipelines",
  "Predictive Maintenance"
];

const implementationThird = [
  "Prompt Engineering",
  "Fine‑Tuning",
  "RAG",
  "Few‑shot Learning"
];

function Expertise() {
  useEffect(() => {
    const skillElements = document.querySelectorAll('.skills-grid .skill');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );
    skillElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Data Science & ML */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <div className="accent-box">
              <h3>Data Science & ML</h3>
              <p>
                Transforming high‑volume, messy data into forecasts, 
                machine learning models, and dashboards that drive real 
                business value.
              </p>

              <div className="flex-chips">
                <span className="chip-title">Added Value:</span>
                {dsOutcomeLabels.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>



              <div className="flex-chips">
                <span className="chip-title">Implementation:</span>
                {implementationFirst.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>

          {/* Process Optimization */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <div className="accent-box">
              <h3>Process Optimization</h3>
              <p>
                Delivering automation solutions that streamline workflows 
                and simplify complex processes at scale.
              </p>

              <div className="flex-chips">
                <span className="chip-title">Business outcome:</span>
                {procOutcomeLabels.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>


              <div className="flex-chips">
                <span className="chip-title">Implementation:</span>
                {implementationSecond.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>

          {/* Generative AI */}
          <div className="skill">
            <FontAwesomeIcon icon={faMeta} size="3x" />
            <div className="accent-box">
              <h3>Generative AI</h3>
              <p>
                Building enterprise‑grade Gen‑AI tools that fit real‑world needs 
                and scale with your goals.
              </p>

              <div className="flex-chips">
                <span className="chip-title">Automation Opportunities:</span>
                {genProcessesLabels.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>


              <div className="flex-chips">
                <span className="chip-title">Implementation:</span>
                {implementationThird.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>

        </div>
          <div className="tech-stack-cta">
            Interested in the specific tools and technologies I use?{" "}
            <a href="#tech-stack">Explore my tech stack →</a>
          </div>
      </div>
    </div>
  );
}

export default Expertise;
