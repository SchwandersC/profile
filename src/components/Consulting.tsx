import React, { useEffect } from "react";
import '../assets/styles/Consulting.scss';
import DynamicText from "./DynamicText"; // Adjust the path if needed

function Consulting() {
  useEffect(() => {
    // Select the consulting container element.
    const consultingContainer = document.querySelector('.consulting-container');
    
    // Create an observer that adds the "visible" class when the element is in view.
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
    
    if (consultingContainer) {
      observer.observe(consultingContainer);
    }
    
    // Clean up observer on component unmount.
    return () => observer.disconnect();
  }, []);

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
              interval={2000}
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
