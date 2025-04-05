import React from "react";
import '../assets/styles/Consulting.scss';

interface ConsultingProject {
  title: string;
  description: string;
  linkLabel: string;
}

const consultingProjects: ConsultingProject[] = [
  {
    title: "Web Scraping & Data Automation",
    description: "Automate data collection from multiple sources, saving hours of manual work.",
    linkLabel: "Schedule a Consultation"
  },
  {
    title: "AI-Driven Content Generation",
    description: "Leverage generative AI to craft engaging copy, product descriptions, and more.",
    linkLabel: "Learn More"
  },
  {
    title: "Process Optimization",
    description: "Streamline your workflows with DevOps best practices, CI/CD, and Dockerized solutions.",
    linkLabel: "Optimize Now"
  },
];

function Consulting() {
  return (
    <div className="consulting-container" id="consulting">
      <h1>Consulting Services</h1>
      <p>
        Below are some of the projects and services I can help you with. Feel free to reach out if you have a custom need.
      </p>
      <div className="consulting-grid">
        {consultingProjects.map((project, index) => (
          <div className="consulting-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Anchor link to your "Contact" section */}
            <a href="#contact" className="consulting-link">
              {project.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consulting;
