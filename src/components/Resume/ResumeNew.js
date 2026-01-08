import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "./Rabeeb-Aqdus-Software-Engineer-CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// PDF worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  // Handle window resize properly
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Rabeeb-Aqdus-Software-Engineer-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-vh-100">
      <Container fluid className="resume-section min-vh-100">
        <Particle />

        {/* Download Button */}
        <Row className="justify-content-center mb-4">
          <Button
            variant="primary"
            onClick={downloadCV}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Download CV
          </Button>
        </Row>

        {/* Resume PDF */}
        <Row className="resume justify-content-center">
          <Document
            file={pdf}
            onLoadSuccess={onLoadSuccess}
            loading="Loading resume..."
            className="d-flex flex-column align-items-center w-100"
          >
            {Array.from(new Array(numPages), (el, index) => (
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
