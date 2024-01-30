import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Openner() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>
        Preview Openner Document
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Openner Document Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
            <Viewer file="test.pdf" /> {/* Update the file path */}
          </Worker>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Openner;
