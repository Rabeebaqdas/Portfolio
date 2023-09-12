import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import market from "../mart.jpg"
import machine from "../machine2.webp"
import raffle from "../raffle.avif"
import lotto from "../lotto.jpg"
import krypt from "../krypt.png"
import aave from "../aave.avif"
import gen from "../gen.webp"
import liq from "../liq.png"

function Projects() {



  return (
    <>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="NFT Marketplace"
              description="Embark on a journey through my NFT marketplace—a creative haven where art, music, and digital wonders converge. Immerse yourself in a world where you can buy, sell, and auction your unique NFTs, unlocking a realm of limitless possibilities. Join me in shaping the future of digital ownership and expression. Welcome to my NFT Marketplace, Welcome to the future of Web 3.0 ."
              ghLink="https://github.com/Rabeebaqdas/NFT_MarketPlace_2.0"
              demoLink="https://marketplace-story.surge.sh/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machine}
              isBlog={false}
              title="Vending Machine"
              description="
              Step into the future with my innovative vending machine project, where convenience meets technology. Experience a seamless shopping experience as my vending machines offer a diverse range of products at your fingertips. From snacks to essentials, indulge in a modern way of shopping that combines efficiency."
              ghLink="https://github.com/Rabeebaqdas/Vending-Machine"
              demoLink="https://vendingmachine.surge.sh/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raffle}
              isBlog={false}
              title="Automated Raffle"
              description="Experience the thrill of chance with my automated raffle system—a modern twist on traditional luck-based games. Engage in exciting raffles where participants have the opportunity to win coveted prizes effortlessly. Through seamless automation, my raffle platform ensures fairness and transparency."
              ghLink="https://github.com/Rabeebaqdas/Automated-Raffle"
              demoLink="https://automated-lottery.surge.sh/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lotto}
              isBlog={false}
              title="Ether Lottery"
              description="Immerse yourself in the world of cryptocurrency excitement with my Ether Lottery project. Participate in a cutting-edge lottery system where Ethereum brings a new level of transparency and security. Seamlessly buy tickets using cryptocurrency and stand a chance to win big. Providing a secure and successful platform to win big !"
              ghLink="https://github.com/Rabeebaqdas/Lottery_dapp"
              demoLink="https://ether-lottery.surge.sh/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypt}
              isBlog={false}
              title="Krypt"
              description="Krypt Platform. Seamlessly send transactions to anyone on the Ethereum network, revolutionizing the way we transfer value. Embrace the power of blockchain technology, enabling secure and borderless transactions that transcend traditional limitations."
              ghLink="https://github.com/Rabeebaqdas/Krypt"
              demoLink="https://krypt-dapp.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aave}
              isBlog={false}
              title="Flash Loan Arbitrage"
              description="Embark on a journey through my Flash Loan Arbitrage project—an innovative endeavor at the intersection of finance and technology. Explore the world of decentralized finance (DeFi) as my platform enables you to exploit price discrepancies across various protocols using flash loans."
              ghLink="https://github.com/Rabeebaqdas/FlashLoanArbitrage"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liq}
              isBlog={false}
              title="Liquidity Pool"
              description="Dive into the world of decentralized finance with my Liquidity Pool Project—a groundbreaking platform that empowers users to contribute assets to liquidity pools and earn rewards. Seamlessly participate in the financial ecosystem by providing liquidity to DeFi protocols."
              ghLink="https://github.com/Rabeebaqdas/Liquidity-Pool"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gen}
              isBlog={false}
              title="Random NFT Gen"
              description="
              Embark on a creative journey with my Random NFT Generator—a unique project that merges technology and artistic expression. Experience the thrill of generating one-of-a-kind NFTs with each click, producing digital artworks that blend innovation and creativity into one single piece."
              ghLink="https://github.com/Rabeebaqdas/Random_NFT_Generator"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>

    </>
  );
}

export default Projects;
