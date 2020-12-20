import React, { useState } from "react";
import styles from "./Phonebook.module.css";

function Phonebook(props) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ name, number });
    reset();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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

export default Phonebook;
