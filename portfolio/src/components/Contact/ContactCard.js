import React from 'react';

import './Contact.css'

export const ContactCard = ({ contactme }) => {
    return(
        <>
            <a href={contactme.link} target="_blank" rel={contactme.reference}>
                <i className={contactme.icon}></i>
            </a>
        </>
    )

}