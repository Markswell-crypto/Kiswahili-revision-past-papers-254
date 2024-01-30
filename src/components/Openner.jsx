import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Openner() {
  const documentFiles = [
    { uri: '/documents/Openner-Pp1.docx', fileType: 'docx' },
    // Add more documents if needed
  ];

  const [showModal, setShowModal] = React.useState(false);

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
          {documentFiles.map((doc, index) => (
            <iframe
              key={index}
              title={`Document Viewer ${index}`}
              src={`/documents/${doc.uri}`}
              className="document-iframe"
              width="100%"
              height="600"
              style={{ border: 'none' }}
            />
          ))}
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
