import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import btnStyles from '../styles/Buttons.module.css'
import styles from '../styles/DeleteModal.module.css'

function DeleteModal(props) {
  const {title, text, button_onclick, button_text, show, handleClose} = props
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
        {<Button className={btnStyles.Buttons} onClick={handleClose}> Cancel </Button>}
        {<Button className={styles.DeleteButtons}  onClick={button_onclick}> {button_text} </Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;