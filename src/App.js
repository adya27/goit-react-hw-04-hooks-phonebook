import "./App.css";
// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";

// import store from "./redux/store";
import Phonebook from "./Components/Phonebook/Phonebook";
import ContactList from "./Components/Phonebook/ContactsList";
import Filter from "./Components/Filter/Filter";
// import { LS } from "./redux/actions";

function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);

  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(store.getItem().contacts));
  // }, []);

  // const contactList = localStorage.getItem("contacts")
  //   ? localStorage.getItem("contacts")
  //   : JSON.stringify(store.getItem().contacts);

  // const parsedContacts = JSON.parse(contactList);

  // useEffect(() => {
  //   getContactFromLS();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // function getContactFromLS() {
  //   if (parsedContacts) {
  //     dispatchLS(parsedContacts);
  //   }
  // }

  // const filterChangeHandler = (data) => {
  //   setFilter(data);
  // };

  // const filterToLower = filter.toLowerCase();
  // const rendered = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filterToLower)
  // );

  return (
    <div className="App">
      <Phonebook />
      <Filter />
      <ContactList />
    </div>
  );
}
// const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => ({
//   dispatchLS: (contacts) => dispatch(LS(contacts)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
