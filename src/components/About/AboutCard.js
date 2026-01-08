import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Rabeeb Aqdus</span> from <span className="purple">Karachi, Pakistan</span>.
            <br />
            I’m an enthusiastic and results-driven <b>Software Engineer</b> with a passion for building scalable web applications. With over <b>3+ years of experience</b> in the tech industry, I’ve had the opportunity to work across multiple domains, mastering full-stack development and diving deep into <b>AI-driven technologies</b> and <b>blockchain solutions</b>.
            <br />
            Currently, I'm pursuing a <b>Master's in Intelligent Interactive Systems</b> at <b>Universität Bielefeld</b>, specializing in emerging technologies like Artificial Intelligence, Machine Learning, and Data Science.
            <br />
            <br />
            In my previous role as a <b>Software Engineer at Decrypted Labs</b>, I had the chance to work on diverse projects, refining my problem-solving skills and applying cutting-edge technologies. My expertise includes building robust applications using the <b>MERN stack</b> and developing decentralized systems through <b>blockchain technologies</b>.
            <br />
            <br />
            Outside of coding, I’m passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <b>Gaming</b> – Exploring new worlds and challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Traveling</b> – Discovering new places and cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies and sharing knowledge with others.
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