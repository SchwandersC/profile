import React from "react";
import gata from '../assets/images/gata.png';
import tfk from '../assets/images/tfk.png';
import genaidb from '../assets/images/genaidb.png';
import clusters from '../assets/images/clusters.png';
import interp from '../assets/images/interp.png';
import revenue from '../assets/images/revenue.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/SchwandersC/GATA" target="_blank" rel="noreferrer"><img src={gata} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SchwandersC/GATA" target="_blank" rel="noreferrer"><h2>GATA</h2></a>
                <p>Designed my very own Generative ai teachers assistant using multi modal RAG to give students access to the exact textbook, lecture, and syllabus information they need in seconds. Hosted on Streamlit with user query information stored in MongoDB.</p>
            </div>
            <div className="project">
                <a href= "https://drive.google.com/file/d/1G7Z_0lVMd2cwqQlT7TZhJp6dk4mZ8lSG/view?usp=sharing" target="_blank" rel="noreferrer"><img src={tfk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href= "https://drive.google.com/file/d/1G7Z_0lVMd2cwqQlT7TZhJp6dk4mZ8lSG/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Non-Profit Event Entry Automation</h2></a>
                <p>Built an automated system using web scraping to gather event data and generative AI to craft exciting descriptions. The automation cut down dozens of hours spent on manual data entry.</p>
            </div>
            <div className="project">
                <a href="https://github.com/SchwandersC/Natural-Language-SQL-Query-Engine-for-NBA-Data" target="_blank" rel="noreferrer"><img src={genaidb} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SchwandersC/Natural-Language-SQL-Query-Engine-for-NBA-Data" target="_blank" rel="noreferrer"><h2>Gen AI SQL Query Generator</h2></a>
                <p>Utilized generative AI to generate SQL queries based on natural language input. Then used Spark to handle large data operations and output database information.</p>
            </div>
            <div className="project">
                <a href="https://github.com/SchwandersC/NCAA_Advanced_Archetypes" target="_blank" rel="noreferrer"><img src={clusters} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SchwandersC/NCAA_Advanced_Archetypes" target="_blank" rel="noreferrer"><h2>NCAA Player Archetypes</h2></a>
                <p>Created an advanced player archetype model for Pivot Analysis adn their NCAA coaching clients. Leveraged fuzzy clustering in R to capture unique player tendency combinations.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/13WpITTXzrGM-5E1Uq9XceFbz47CQ5T1T/view?usp=sharing" target="_blank" rel="noreferrer"><img src={revenue} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/13WpITTXzrGM-5E1Uq9XceFbz47CQ5T1T/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Energy Trading ML Revenue Optimization</h2></a>
                <p>Drove ML model improvements resulting in six-figure revenue gains. Developed and deployed end to end ML pipelines in Azure.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/13WpITTXzrGM-5E1Uq9XceFbz47CQ5T1T/view?usp=sharing" target="_blank" rel="noreferrer"><img src={interp} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/13WpITTXzrGM-5E1Uq9XceFbz47CQ5T1T/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Energy Trading ML Interpretability</h2></a>
                <p>Created data pipelines and dashboards to support model interpretability and stakeholder engagement.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;