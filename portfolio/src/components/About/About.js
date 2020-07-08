import React from 'react';

import './About.css';
import { about } from '../../constants/About';

export const About = ({ bio }) => {
    return (
        <div className="about-container">
            <p><b>Story:</b> {about.bio}</p>
        </div>
    )
}