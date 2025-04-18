// src/components/TechStack.tsx
import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/TechStack.scss";

const dataScience = {
  description:
    "Core languages and tools I use to ingest, clean, model, and visualize data.",
  subcategories: [
    {
      title: "Languages",
      labels: ["Python", "R", "SQL", "Julia"],
    },
    {
      title: "Frameworks & Tools",
      labels: ["Spark", "TensorFlow", "Power BI"],
    },
  ],
};

const infraDevOps = {
  description:
    "Platforms and tooling I rely on to build, deploy, and maintain scalable pipelines.",
  subcategories: [
    {
      title: "Cloud Providers",
      labels: ["Azure", "AWS"],
    },
    {
      title: "Containers & Orchestration",
      labels: ["Docker"],
    },
    {
      title: "Version Control & OS",
      labels: ["Git", "Linux", "DataBricks"],
    },
  ],
};

const aiNLP = {
  description:
    "Libraries and frameworks I use to build chatbots, RAG pipelines, and NLP workflows.",
  subcategories: [
    {
      title: "Large Language Models",
      labels: ["OpenAI", "LlamaIndex"],
    },
    {
      title: "NLP Libraries",
      labels: ["NLTK", "Hugging Face"],
    },
    {
      title: "Orchestration",
      labels: ["LangChain"],
    },
  ],
};

const TechStack: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".tech-category");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const sections = [
    { icon: "📊", heading: "Data Science & Analytics", ...dataScience },
    { icon: "🛠️", heading: "Infrastructure & DevOps", ...infraDevOps },
    { icon: "🤖", heading: "AI & NLP Frameworks", ...aiNLP },
  ];

  return (
    <div className="tech-stack-container" id="tech-stack">
      <h1>🛠️ My Tech Stack</h1>
      <h2>Tools and frameworks I use to turn ideas into impactful solutions:</h2>

      <div className="tech-categories">
        {sections.map(({ icon, heading, description, subcategories }) => (
            <div className="accent-box">
              <h3>
                {icon} {heading}
              </h3>
              <p className="category-desc">{description}</p>

              {subcategories.map(({ title, labels }) => (
                <div key={title} className="subcategory">
                  <h3>{title}</h3>
                  <div className="chip-container">
                    {labels.map((label) => (
                      <Chip key={label} label={label} className="chip" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
