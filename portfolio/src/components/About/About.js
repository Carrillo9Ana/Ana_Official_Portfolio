import React from 'react';

import './About.css';

export const About = ({ bio }) => {
    return (
        <div className="about-container">
            <p>{bio}</p>
        </div>
    )
}