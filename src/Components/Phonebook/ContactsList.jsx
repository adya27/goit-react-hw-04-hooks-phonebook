import PropTypes from 'prop-types';

import Contact from "./Contact";

function ContactList(props) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {props.contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteBtn={props.onDeleteBtnClick}
            />
          );
        })}
      </ul>
    </div>
  );
}


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired
}

export default ContactList;
