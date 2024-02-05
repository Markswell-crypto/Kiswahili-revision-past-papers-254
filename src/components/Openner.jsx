import { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import OpennerPp1 from '../assets/documents/OpennerPp1.pdf';
import OpennerPp2 from '../assets/documents/OpennerPp2.pdf';
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
      fileType: "pdf",  
      fileName: "OpennerPp1.pdf"
    }, 
    { 
      uri: OpennerPp2,
      fileType: "pdf",  
      fileName: "OpennerPp2.pdf"
    } 
  ];

  return (
    <div>
      Openner Kiswahili Revision Papers
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
