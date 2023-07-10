import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal(props) {
  const {title, text, button_onclick, button_text, show, handleClose} = props
  return (
    <div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{text}</p>
        </Modal.Body>

        <Modal.Footer>
        {<Button variant="secondary" onClick={handleClose}> Cancel </Button>}
        {<Button variant="primary" onClick={button_onclick}> {button_text} </Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;