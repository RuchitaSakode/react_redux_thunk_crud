import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import allActions from "../../Actions/allActions";
import { useDispatch } from "react-redux";

function CustomComponent({ title, ...props }) {
  const modalDisplay = useSelector((state) => state.modalStatus);
  console.log("Check Modal Display", modalDisplay);
  const dispatch = useDispatch();

  return (
    <Modal
      show={modalDisplay.isModalShow}
      onHide={(e) => dispatch(allActions.modalActions.hideModal())}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props.children}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomComponent;
