import React from 'react';

import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b>Name:</b> {project.name} </p>
            <img className="images" src={project.image} alt=" project "/>
            <p><b>Describtion:</b> {project.description} </p>
            <p><a href={project.link}>Application deployed link</a></p>
            <br/>
            <p><a href={project.github}><img src="https://avatars3.githubusercontent.com/u/9919?s=40&v=4" alt="github"/></a></p>
        </div>
    )
}