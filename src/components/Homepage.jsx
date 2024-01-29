import React from 'react';
import { Worker, Viewer, pdfjs } from 'react-file-viewer';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const documentFiles = [
  'Openner-Pp1.docx',
  'Opener-Pp2.docx',
  'Marking-Scheme-Openner-Pp1.docx',
  'Marking-Scheme-Openner-Pp3.docx',
];

const Homepage = () => {
  const getFileType = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    if (extension === 'pdf') return 'pdf';
    if (extension === 'docx') return 'docx';
    // Add more supported types as needed
    return '';
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {/* Left Section (10%) */}
        <div className="col-md-2 bg-light ">
          <ul className="list-group mt-2">
            <h5 className='text-dark text-center textFit'>CATEGORIES</h5>
            <li className="list-group-item mb-2"><a href="#kcse">KCSE Pastpapers</a></li>
            <li className="list-group-item mb-2"><a href="#opener">Opener Past Papers</a></li>
            <li className="list-group-item mb-2"><a href="#midterm">Midterm Past Papers</a></li>
            <li className="list-group-item mb-2"><a href="#endterm">Endterm Pastpapers</a></li>
          </ul>
        </div>

        {/* Wider Section (90%) */}
        <div className="col-md-10">
          {documentFiles.map((doc, index) => (
            <div key={index} className="section bg-light mb-2">
              <h2>{doc.replace('.docx', '')}</h2>
              <Worker workerUrl={`//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                <Viewer fileUrl={`/documents/${doc}`} fileType={getFileType(doc)} />
              </Worker>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
