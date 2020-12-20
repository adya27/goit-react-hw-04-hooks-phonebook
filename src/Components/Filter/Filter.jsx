import React, { useState } from "react";

function Filter(props) {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
    props.onChange(value);
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input onChange={handleFilter} value={filter}></input>
    </div>
  );
}

export default Filter;
