import { useState } from 'react';
import { Link } from 'react-router-dom';

const ExamPapers = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  // Function to handle payment logic
  const handlePayment = () => {
    // Simulate a payment process (you can replace this with your actual payment logic)
    // For simplicity, setPaymentCompleted is used to track whether payment is completed
    setPaymentCompleted(true);
  };

  return (
    <div>
      <h1>Exam Papers Section</h1>
      <ul>
        <li>
          <p>Subject: Swahili | Year: 2022</p>
          {/* Display Download or Marking Scheme button based on payment status */}
          {paymentCompleted ? (
            <button disabled>Download (Paid)</button>
          ) : (
            <>
              {/* Link to the payment component when Download is clicked */}
              <Link to="/payment">
                <button onClick={handlePayment}>Download</button>
              </Link>
              {/* Button for Marking Scheme (Payment) */}
              <button onClick={handlePayment}>Marking Scheme (Payment)</button>
            </>
          )}
        </li>
        {/* Add more exam papers */}
      </ul>
      {/* Add search functionality */}
      <input type="text" placeholder="Search by subject" />
      <input type="text" placeholder="Search by year" />
      {/* Navigation */}
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default ExamPapers;
