import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Rabeeb Aqdus Jilani</span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br /> I am a passionate Software Engineer, MERN Stack Developer, and Smart Contract Engineer.
            <br />
            I have worked as a Software Engineer at **Decrypted Labs**.
            <br />
            Currently, I am pursuing my Master’s degree in **Intelligent Interactive Systems** at **Universität Bielefeld**.
            <br />
            <br />
            Apart from coding, some activities I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rabeeb Aqdus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
