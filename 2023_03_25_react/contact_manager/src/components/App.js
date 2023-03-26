import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Swaroop",
      email: "swaroop@sai.kumar.com"
    },
    {
      id: "2",
      name: "ankit",
      email: "ankit@kumar.com"
    },
    {
      id: "3",
      name: "Subhash",
      email: "subhash@kd.com"
    }
  ];
  return (
    // <h1>Hello World!</h1>

    <div className="ui container">
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
    
    // <ContactList></ContactList>
  );
}

export default App;
