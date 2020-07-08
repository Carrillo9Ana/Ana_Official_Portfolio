import React from 'react';

import { ContactCard } from './ContactCard.js'

export const Contact = ({ contact }) => {
    return(
        <div className="colorlib">
            {
                contact.contactList.map(contactme => <ContactCard contactme={contactme} />)  
            }
        </div>
    )
}