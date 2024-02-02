import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import OpennerPp1 from '../assets/documents/Openner-Pp1.docx';
import OpennerPp2 from '../assets/documents/Opener-Pp2.docx';
import Payment from './Payment';
import { Button } from 'react-bootstrap';

const DocumentViewer = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDownloadClick = (document) => {
    setSelectedDocument(document);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    // Implement logic to handle successful payment
    console.log('Payment successful. Downloading document:', selectedDocument);
    // Implement logic to download the document or provide access
  };

  const docs = [
    { 
      uri: OpennerPp1,
      fileType: "docx",  
      fileName: "OpennerPp1.docx"
    }, 
    { 
      uri: OpennerPp2,
      fileType: "docx",  
      fileName: "OpennerPp2.docx"
    }, 
    { 
      uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
      fileType: "ppt",
      fileName: "Sample-PPT-File-500kb.ppt"
    }, 
    { 
      uri: "../assets/test.pdf",
      fileType: "pdf",
      fileName: "test.pdf"
    }, 
  ];

  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 700 }}
      />
      <div className="mt-3">
        {docs.map((document, index) => (
          <Button
            key={index}
            onClick={() => handleDownloadClick(document)}
            className="mb-2 mr-2 bg-transparent border border-light text-primary"
          >
            Download {document.fileName}
          </Button>
        ))}
      </div>
      {showPaymentModal && (
        <Payment
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}

export default DocumentViewer;
