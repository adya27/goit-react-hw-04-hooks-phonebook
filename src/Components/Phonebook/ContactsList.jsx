import { connect } from "react-redux";
import store from "../../redux/store";

import * as actions from "../../redux/actions";
import Contact from "./Contact";

function ContactList({ contacts, onDeleteBtnClick }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteBtn={() => onDeleteBtnClick(contact.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(state.filter)
  ),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteBtnClick: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
