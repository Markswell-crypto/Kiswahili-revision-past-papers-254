import React from 'react';
import Kcse from './Kcse';
import Openner from './Openner';
import Midterm from './Midterm';
import Endterm from './Endterm';

const Homepage = () => {
  return (
    <div className='container mt-3'>
    <div className="container-fluid">
      <div className="row">
        {/* Left Section (10%) */}
        <div className="col-md-2 bg-light">
          <ul className="list-group">
            <p className='text-primary text-center mt-2'>Categories</p>
            <li className="list-group-item mt-2 mb-2"><a href="#kcse">KCSE Pastpapers 2024</a></li>
            <li className="list-group-item mt-2 mb-2"><a href="#opener">Opener PastPapers 2024</a></li>
            <li className="list-group-item mt-2 mb-2"><a href="#midterm">Midterm PastPapers 2024</a></li>
            <li className="list-group-item mt-2 mb-2"><a href="#endterm">Endterm Pastpapers 2024</a></li>
          </ul>
        </div>

        {/* Wider Section (90%) */}
        <div className="col-md-10">
          {/* First Section (Microsoft Document for KCSE) */}
          <div id="kcse" className="section bg-light mb-2 mt-2">
            <h2>KCSE Pastpapers 2024</h2>
                <Kcse />
          </div>

          {/* Second Section (Microsoft Document for Opener) */}
          <div id="opener" className="section bg-light mb-2 mt-2">
            <h2>Opener Past Papers 2024</h2>
                <Openner />
          </div>

          {/* Third Section (Microsoft Document for Midterm) */}
          <div id="midterm" className="section bg-light mb-2 mt-2">
            <h2>Midterm Past Papers 2024</h2>
                <Midterm />
          </div>

          {/* Fourth Section (Microsoft Document for Endterm) */}
          <div id="endterm" className="section bg-light mt-2 mb-2">
            <h2>Endterm Pastpapers 2024</h2>
                <Endterm />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Homepage;
