import PropTypes from 'prop-types';

import DeleteBtn from "../DeleteBtn/DeleteBtn";
import styles from "./Contact.module.css";

function Contact(props) {
  return (
    <li className={styles.contact}>
      {props.name} : {props.number}
      <DeleteBtn onClickDeleteBtn={() => props.deleteBtn(props.id)} />
    </li>
  );
}


Contact.propTypes = {
  deleteBtn: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
}

export default Contact;
