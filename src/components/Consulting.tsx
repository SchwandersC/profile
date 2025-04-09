import React from "react";
import '../assets/styles/Consulting.scss';
import DynamicText from "./DynamicText"; // Adjust the path if needed

function Consulting() {
  return (
    <div className="consulting-container" id="consulting">
      
        <h1>Consulting Services</h1>
        <h2>Curious what we could build together? Here are a few ideas:</h2>
      <div className="accent-box">
        <ul className="consulting-pst">
          <h2>
            1. ML models that predict{" "}
            <DynamicText 
              options={[
                "market prices",
                "equipment failures",
                "user behavior",
                "customer churn",
                "inventory levels",
                "sales forecasts",
                "demand trends",
                "fraud detection",
                "credit risk",
                "maintenance schedules",
                "energy consumption",
                "weather patterns",
                "traffic flow",
                "social media sentiment",
                "product recommendations"
              ]}
              interval={3000}
            />.
          </h2>
          <h2>
            2. Chatbots, RAG pipelines, and summarization tools using Generative AI.
          </h2>
          <h2>
            3. Dashboards with actionable KPIs for better decision-making.
          </h2>
          <h2>
            4. Not sure where to start? I can analyze your processes to uncover opportunities for automation and AI integration.
          </h2>
        </ul>
      </div>
        <a href="#contact" className="consulting-button">Contact Me</a>
    </div>
  );
}

export default Consulting;
