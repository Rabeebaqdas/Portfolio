import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "./ATS_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const downloadCV = () => {
    const pdfUrl = "./ATS_CV.pdf"; // Path to the PDF file you want to download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ATS_CV.pdf"; // Specify the filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-vh-100">
      <Container fluid className="resume-section min-vh-100">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={downloadCV} // Trigger the download on button click
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex gap-3 flex-column justify-content-center w-100"
            onLoadSuccess={onLoadSuccess}
          >
            {/* Render each page dynamically based on the number of pages */}
            {Array.from(new Array(numPages), (el, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                <Page pageNumber={index + 1} scale={width > 786 ? 1.7 : 0.6} />
              </div>
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
