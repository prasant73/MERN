import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    const removeContactHandler = (id) => {
        props.getContactId(id);
    };

    // const contacts = [{
    //     id: "1",
    //     "name": "Prasant",
    //     "email": "abc@pk.com"
    // },
    // {
    //     id: "2",
    //     "name": "Prsdfasant",
    //     "email": "absdfc@pk.com"
    // }]
    // const renderContactList = props.contacts.map((contact) => {
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
                contact={contact} 
                clickHandler={removeContactHandler}
                key={contact.id}
            />
        )
    })
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;