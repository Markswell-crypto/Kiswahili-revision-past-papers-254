import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

function DocumentViewer({ documentUri }) {
  const renderers = {
    docx: DocViewerRenderers.Docx,
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="section bg-light mb-2">
            <h2>Document Viewer</h2>
            <DocViewer documents={[{ uri: documentUri, fileType: 'docx' }]} renderers={renderers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentViewer;
