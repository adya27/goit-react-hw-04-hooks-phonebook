import React, { useState } from "react";
import styles from "./Phonebook.module.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { store } from "../../redux/store";

import * as actions from "../../redux/actions";

function Phonebook({ handleSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleAddName = (e) => {
    const { value } = e.currentTarget;

    // this.setState({ [name]: value });
    setName(value);

    // console.log(this.state);
  };

  const handleAddNumber = (e) => {
    const { value } = e.currentTarget;

    // this.setState({ [name]: value });

    setNumber(value);
    // console.log(this.state);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.onSubmit({ name, number });
  //   reset();
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      store
        .getState()
        .contacts.map((contact) => contact.name)
        .includes(name)
    ) {
      alert(`${name} is already exists in contacts`);
      return;
    }
    handleSubmit({ id: uuidv4(), name, number });
    reset();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input1}
            name={"name"}
            onChange={handleAddName}
            value={name}
            type="text"
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input2}
            name={"number"}
            onChange={handleAddNumber}
            value={number}
            type="text"
          />
        </label>
        <button className={styles.input1} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (contact) => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
