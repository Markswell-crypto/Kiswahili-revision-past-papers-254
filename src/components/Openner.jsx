import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('your_stripe_publishable_key');

function Openner() {
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownloadClick = async () => {
    // Add logic for handling payment here
    // For example, open a payment modal using Stripe Elements
    const stripe = await stripePromise;
    // Replace with your actual product ID or SKU
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'your_product_price_id', quantity: 1 }],
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>
        Preview Document
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Document Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Document
            file="/documents/test.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Elements stripe={stripePromise}>
            <Button variant="success" onClick={handleDownloadClick}>
              Download (Paid)
            </Button>
          </Elements>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Openner;
