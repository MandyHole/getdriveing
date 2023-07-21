import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/DeleteModal.module.css";
import MyButtons from "./MyButtons";

function DeleteModal(props) {
  // to confirm deletion of database items
  const { title, text, button_onclick, button_text, show, handleClose } = props;
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className={styles.Header}> {title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className={styles.Body}>{text}</p>
        </Modal.Body>

        <Modal.Footer>
          {<MyButtons grey text="Cancel" on_click={handleClose} />}
          {
            <Button className={styles.DeleteButtons} onClick={button_onclick}>
              {" "}
              {button_text}{" "}
            </Button>
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;
