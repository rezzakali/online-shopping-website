import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Modals() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div>
      <Button onClick={() => handleShow(960)}>Click</Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </div>
  );
}

export default Modals;
