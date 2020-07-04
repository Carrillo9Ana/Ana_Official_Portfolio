import React from 'react';

import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
    return (
        <div>
            <p><b>Name:</b> {project.name} </p>
            <p><b>Describtion:</b> {project.description} </p>
            <p><b>Link:</b><a href={project.link}>{project.link}</a> </p>
        </div>
    )
}