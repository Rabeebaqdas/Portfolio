import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// ✅ Public PDF path
const pdfUrl = "/Rabeeb-Aqdus-Software-Engineer-CV.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-vh-100">
      <Container fluid className="resume-section min-vh-100">
        <Particle />

        {/* Download Button */}
        <Row className="justify-content-center mb-4">
          <a
            href={pdfUrl} // PDF URL
            download="Rabeeb-Aqdus-Software-Engineer-CV.pdf" // Specify file name on download
            style={{ textDecoration: "none" }} // To prevent any underline
          >
            <Button variant="primary" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload />
              &nbsp; Download CV
            </Button>
          </a>
        </Row>

        {/* Resume PDF */}
        <Row className="resume justify-content-center">
          <Document
            file={pdfUrl}
            onLoadSuccess={onLoadSuccess}
            loading="Loading resume..."
            className="d-flex flex-column align-items-center w-100"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "30px",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Page
                  pageNumber={index + 1}
                  width={Math.min(width * 0.9, 900)}
                  renderTextLayer={false}
                />
              </div>
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
