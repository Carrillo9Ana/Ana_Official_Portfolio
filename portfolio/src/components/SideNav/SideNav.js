import React from 'react';

import './SideNav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img 
                src="https://avatars1.githubusercontent.com/u/50473626?v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name"> Ana Carrillo </h2>
            <p className="subtitle">Full Stack Web Developer with a passion for hiking.</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("contact")}>Contact</p>
            </div>
        </div>
    );
};