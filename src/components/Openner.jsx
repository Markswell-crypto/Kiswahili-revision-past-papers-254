import { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import OpennerPp1 from '../assets/documents/OpennerPp1.pdf';
import OpennerPp2 from '../assets/documents/OpennerPp2.pdf';
import MarkingSchemePp1 from '../assets/documents/MarkingSchemePp1.pdf';
import MarkingSchemePp2 from '../assets/documents/MarkingSchemePp2.pdf';
import Payment from './Payment';
import { Button } from 'react-bootstrap';

const DocumentViewer = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDownloadClick = (document) => {
    setSelectedDocument(document);
    if (document.isMarkingScheme) {
      // For marking schemes, trigger the payment modal
      setShowPaymentModal(true);
    } else {
      // For regular documents, implement logic to handle download or access
      console.log('Downloading regular document:', document);
      // Implement logic to download the document or provide access
    }
  };

  const handleMarkingSchemeDownload = () => {
    // Implement logic to handle successful payment for marking scheme
    console.log('Payment successful. Downloading marking scheme:', selectedDocument);
    // Implement logic to download the marking scheme or provide access
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

  const marking_Scheme = [
    { 
      uri: MarkingSchemePp1,
      fileType: "pdf",  
      fileName: "MarkingSchemePp1.pdf",
      isMarkingScheme: true, // Marking scheme indicator
    }, 
    { 
      uri: MarkingSchemePp2,
      fileType: "pdf",  
      fileName: "MarkingSchemePp2.pdf",
      isMarkingScheme: true, // Marking scheme indicator
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
      {/* <div className="mt-3">
        {docs.map((document, index) => (
          <Button
            key={index}
            onClick={() => handleDownloadClick(document)}
            className="mb-2 mr-2 bg-transparent border border-light text-primary"
          >
            Download {document.fileName}
          </Button>
        ))}
      </div> */}
      <div className="mt-3">
        {marking_Scheme.map((document, index) => (
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
          onSuccess={handleMarkingSchemeDownload} // Handle marking scheme download on payment success
        />
      )}
    </div>
  );
}

export default DocumentViewer;
