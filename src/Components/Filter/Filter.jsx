import React, { useState } from "react";
import { connect } from "react-redux";

import { filterContact } from "../../redux/actions";

function Filter({ dispatchFilter }) {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
    dispatchFilter(value);
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input onChange={handleFilter} value={filter}></input>
    </div>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  dispatchFilter: (query) => dispatch(filterContact(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
