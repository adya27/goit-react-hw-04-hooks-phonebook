import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Phonebook from "./Components/Phonebook/Phonebook";
import ContactList from "./Components/Phonebook/ContactsList";
import Filter from "./Components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const contactList = localStorage.getItem("contacts")
    ? localStorage.getItem("contacts")
    : JSON.stringify(contacts);

  const parsedContacts = JSON.parse(contactList);

  useEffect(() => {
    getContactFromLS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getContactFromLS() {
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }

  const formSubmitHandler = (data) => {
    const idName = uuidv4();
    data.id = idName;

    const names = contacts.map((contact) => {
      return contact.name;
    });

    if (names.includes(data.name)) {
      alert(`${data.name} is already exists in contacts`);
    } else {
      setContacts((prev) => [...prev, data]);
    }
  };

  const filterChangeHandler = (data) => {
    setFilter(data);
  };

  const onDeleteBtnClick = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filterToLower = filter.toLowerCase();
  const rendered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterToLower)
  );

  return (
    <div className="App">
      <Phonebook onSubmit={formSubmitHandler} />
      <Filter onChange={filterChangeHandler} />
      <ContactList contacts={rendered} onDeleteBtnClick={onDeleteBtnClick} />
    </div>
  );
}

export default App;
