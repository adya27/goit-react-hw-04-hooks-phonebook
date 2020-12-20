import styles from "./DeleteBtn.module.css";
import PropTypes from "prop-types";

function DeleteBtn(props) {
  return (
    <button
      className={styles.deleteBtn}
      onClick={props.onClickDeleteBtn}
      type="button"
    >
      Delete
    </button>
  );
}


DeleteBtn.propTypes = {
  onClickDeleteBtn: PropTypes.func.isRequired
}

export default DeleteBtn;
