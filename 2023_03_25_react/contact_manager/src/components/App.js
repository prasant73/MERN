import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Swaroop",
  //     email: "swaroop@sai.kumar.com"
  //   },
  //   {
  //     id: "2",
  //     name: "ankit",
  //     email: "ankit@kumar.com"
  //   },
  //   {
  //     id: "3",
  //     name: "Subhash",
  //     email: "subhash@kd.com"
  //   }
  // ];

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    let retrieveContacts = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  // useEffect(() => {
  //   window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() =>{ if(contacts.length > 0)
    {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }}, [contacts]);


// const [contacts, setContacts] = useState(() => {
//   const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   return retrieveData ? retrieveData : [];
// });

// const addContactHandler = (contact) => {
//   setContacts((prevContacts) => {
//     return [...prevContacts, contact];
//   });
// };
// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
// }, [contacts]);

  return (
    // <h1>Hello World!</h1>

    <div className="ui container">
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList 
        contacts={contacts} 
        getContactId = {removeContactHandler}
      ></ContactList>
    </div>
    
    // <ContactList></ContactList>
  );
}

export default App;
