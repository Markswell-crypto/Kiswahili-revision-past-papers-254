import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from 'react-icons/io';

function Footer() {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
        <div className="col-md-4 text-center">
            <Image src="/klogo.png" alt="Kiswahili Revision PastPapers" fluid height="100px" width="100px" />
            <h1 className="logo">Kiswahili Revision PastPapers</h1>
          </div>
          <div className="col-md-2 mt-2">
            <p className='text-center'>Quick Links</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/exam-papers">Exam Papers</Link></li>
              <li><Link to="/payment">Payment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-5 mt-3 text-center">
            <p>Contact Information</p>
            <p>Phone: +254722125349</p>
            <p>Email: ogindamomanyi@gmail.com</p>
          </div>
          <div className='col-md-1 mt-5 mr-5'>
          <div className="scroll-to-top" onClick={handleScrollToTop}>
        <IoIosArrowUp size={32} />
        <p className="text-light mb-0">To Top</p>
      </div>
          </div>
        </div>
      </div>
      <div className="text-light text-center py-2">
        &copy; 2024 MAXOTECH. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
