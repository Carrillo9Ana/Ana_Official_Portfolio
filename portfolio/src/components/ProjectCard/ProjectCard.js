import React from 'react';

import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b>Name:</b> {project.name} </p><br/>
            <a href={project.link}><img className="images" src={project.image} alt=" project "/></a><br/>
            <p><b>Description:</b> {project.description} </p>
            <br/>
            <p><a href={project.github}><img src="https://avatars3.githubusercontent.com/u/9919?s=40&v=4" alt="github"/></a></p>
        </div>
    )
}