import React from 'react';

import { SideNav } from './../SideNav/SideNav.js'

import './Portfolio.css';

export const Portfolio = (props) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav/>
            </div>
            <div className="main-section-container">
                <h1>Main section</h1>
            </div>
        </div>
    )
}