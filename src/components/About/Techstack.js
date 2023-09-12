import React from "react";
import { Col, Row } from "react-bootstrap";
import ethers from "../etheres.png"
import sss from "../sss.png"
import w2 from "../w2.png"
import moralis from "../image.png"

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiSolidity,
  SiEthereum,
  SiTypescript,
  SiWeb3Dotjs,
  SiCss3,
  SiChainlink,
  SiIpfs,
  SiApollographql
} from "react-icons/si";
import { FaHardHat, FaHtml5 } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="imgs" alt="img" src={ethers}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHardHat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChainlink />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIpfs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApollographql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="imgs2" alt="img" src={sss}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="imgs2" alt="img" src={w2}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="imgs" alt="img" src={moralis}></img>
      </Col>
    </Row>
  );
}

export default Techstack;
