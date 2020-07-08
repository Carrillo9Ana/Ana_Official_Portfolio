import React from 'react';

import { About } from './../About/About.js';
import { Skills } from './../Skills/Skills.js';
import { Projects } from './../Project/Project.js';
import { Contact } from './../Contact/Contact.js';

import './SectionContainer.css';

export const SectionContainer = ({
    selectedHeading,
    selectedQuote,
    selectedSection,
    skills,
    projects,
    contact }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About />,
                        skills: <Skills skills={skills} />,
                        projects: <Projects projects={projects} />,
                        contact: <Contact contact={contact} />
                    }[selectedSection]
                }
            </div>
        </div>
    )
}