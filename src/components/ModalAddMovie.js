import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddMovie from "./AddMovie";

const ModalAddMovie = ({ onAdd }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button size="sm" variant="warning"  onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Fill The Form </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMovie onAdd={onAdd} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddMovie;
