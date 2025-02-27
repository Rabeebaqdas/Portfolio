import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "./pdf.pdf";
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

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
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
              <div key={index} style={{ marginBottom: "20px" }}> {/* Add margin for spacing between pages */}
                <Page
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.7 : 0.6}
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
