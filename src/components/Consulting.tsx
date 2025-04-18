// src/components/Consulting.tsx
import React, { useEffect } from "react";
import DynamicText from "./DynamicText";  // adjust import as needed
import "../assets/styles/Consulting.scss";

export default function Consulting() {
  useEffect(() => {
    const elems = document.querySelectorAll('.consulting-container');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );
    elems.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="consulting-container" id="consulting">
      <h1>🚀Lets Build Something Amazing! </h1>
      <h2>Curious what we could build together? Here are some impactful ways to leverage AI and automation</h2>

      <div className="accent-box">
        <ul className="consulting-list">
          <li>
            <div className="consulting-item-header">
              <span className="consulting-number">1.</span>
              <span className="consulting-title">Predictive ML Models</span>
            </div>
            <p className="consulting-description">
              ML models that predict{" "}
              <DynamicText
                options={[
                  "market prices",
                  "equipment failures",
                  "user behavior",
                  "customer churn",
                  "inventory levels",
                  "sales forecasts",
                  "demand changes",
                  "fraud detection",
                  "credit risk",
                  "energy consumption",
                  "weather patterns",
                  "traffic flow",
                  "social media sentiment",
                  "product recommendations",
                ]}
                interval={2000}
              />
              .
            </p>
          </li>

          <li>
            <div className="consulting-item-header">
              <span className="consulting-number">2.</span>
              <span className="consulting-title">Generative AI Tools</span>
            </div>
            <p className="consulting-description">
              Chatbots, RAG pipelines, and summarization tools using
              Generative AI.
            </p>
          </li>

          <li>
            <div className="consulting-item-header">
              <span className="consulting-number">3.</span>
              <span className="consulting-title">Interactive Dashboards</span>
            </div>
            <p className="consulting-description">
              Dashboards with actionable KPIs for better decision‑making.
            </p>
          </li>

          <li>
            <div className="consulting-item-header">
              <span className="consulting-number">4.</span>
              <span className="consulting-title">Process Automation Discovery</span>
            </div>
            <p className="consulting-description">
              Not sure where to start? I will analyze your operations and uncover
              opportunities that will save you time and money.
            </p>
          </li>
          <p className="tech-stack-link">
          Built for seamless integration with your existing workflows and processes.{" "}
            <a href="#tech-stack">View my tools →</a>
          </p>

        </ul>
      </div>

      <a href="#techstack" className="consulting-button">
        Contact Me
      </a>
    </div>
  );
}
