import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Payment() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("50");
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const payHandler = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5000/token", {
      amount,
      phone,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Pay with{" "}
          <span className="text-success font-bold">Mpesa</span>{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Amount"
              value={amount}
              readOnly
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            onClick={payHandler}
          >
            Pay Now
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Payment;
