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
                <p>A multi-modal generative AI teachers assistant. Capable of retreiving exact lecture and textbook information related to student questions. </p>
            </div>
            <div className="project">
                <a href= "https://drive.google.com/file/d/1G7Z_0lVMd2cwqQlT7TZhJp6dk4mZ8lSG/view?usp=sharing" target="_blank" rel="noreferrer"><img src={tfk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href= "https://drive.google.com/file/d/1G7Z_0lVMd2cwqQlT7TZhJp6dk4mZ8lSG/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Non-Profit Event Entry Automation</h2></a>
                <p>An automated event creation system using web scraping and generative AI to cut down dozens of hours spent on manual data entry.</p>
            </div>
            <div className="project">
                <a href="https://github.com/SchwandersC/Natural-Language-SQL-Query-Engine-for-NBA-Data" target="_blank" rel="noreferrer"><img src={genaidb} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SchwandersC/Natural-Language-SQL-Query-Engine-for-NBA-Data" target="_blank" rel="noreferrer"><h2>Gen AI SQL Query Generator</h2></a>
                <p>A natural langauge to SQL query convertor, using Spark to handle large database operations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/SchwandersC/NCAA_Advanced_Archetypes" target="_blank" rel="noreferrer"><img src={clusters} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SchwandersC/NCAA_Advanced_Archetypes" target="_blank" rel="noreferrer"><h2>NCAA Player Archetypes</h2></a>
                <p>An advanced player archetype model for Pivot Analysis and their NCAA coaching clients. Leveraged fuzzy clustering in R to capture unique player tendency combinations.</p>
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