import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import machine from "../machine2.webp";
import lotto from "../lotto.jpg";
import krypt from "../krypt.png";
import market from "../mart.jpg";
import aave from "../aave.avif";
import gen from "../gen.webp";
import liq from "../liq.png";
const projects = [
  {
    imgPath: krypt,
    title: "Krypt",
    description:
      "Krypt Platform is a Web3.0 blockchain application that enables users to send transactions over the Ethereum network, with each transaction being permanently recorded on the blockchain. The platform offers a secure and user-friendly interface, allowing users to manage their Ethereum transactions seamlessly. By leveraging blockchain technology, Krypt ensures transparency and immutability, revolutionizing the way we transfer value by enabling secure and borderless transactions that transcend traditional limitations.",
    ghLink: "https://github.com/Rabeebaqdas/Krypt",
    demoLink: "https://krypt-dapp.surge.sh/",
  },
  {
    imgPath: market,
    title: "NFT Marketplace",
    description:
      "Embark on a journey through my NFT marketplace—a creative haven where art, music, and digital wonders converge. Explore a world where you can buy, sell, and auction unique NFTs, unlocking limitless possibilities. Built on blockchain technology, the platform ensures security, transparency, and true ownership of digital assets. Whether you're an artist, collector, or investor, this marketplace empowers you to shape the future of digital expression. Welcome to the evolution of Web 3.0 and NFT innovation.",
    ghLink: "https://github.com/Rabeebaqdas/NFT_MarketPlace_2.0",
    demoLink: "https://marketplace-story.surge.sh/",
  },
  {
    imgPath: machine,
    title: "Vending Machine",
    description:
      "This decentralized vending machine DApp enables users to purchase snacks using Ethereum while ensuring secure and transparent transactions through blockchain integration. Users can connect their wallets to buy donuts, pizza, Lays, and drinks at fixed ETH prices, with real-time balance tracking. Additionally, the owner has full control to refill stock and update item prices, making the system flexible and adaptive. Combining smart contracts with everyday convenience, this vending machine redefines digital transactions in the retail sector.",
    ghLink: "https://github.com/Rabeebaqdas/Vending-Machine",
    demoLink: "https://vendingmachine.surge.sh/",
  },
  {
    imgPath: lotto,
    title: "Ether Lottery",
    description:
      "Ether Lottery DApp is a decentralized lottery system built on Ethereum, ensuring fairness and transparency through blockchain technology. Players can participate by sending 0.011 ETH, contributing to the lottery pool. The winner is selected using Chainlink VRF (Verifiable Random Function) v2, ensuring true randomness in winner selection. The platform tracks lottery history, active players, and the current prize pot in real-time. With secure smart contracts, Ether Lottery provides a provably fair and trustless gaming experience.",
    ghLink: "https://github.com/Rabeebaqdas/Lottery_dapp",
    demoLink: "https://ether-lottery.surge.sh/",
  },
  {
    imgPath: aave,
    title: "Flash Loan Arbitrage",
    description:
      "Embark on a journey through my Flash Loan Arbitrage project—an innovative endeavor at the intersection of finance and technology. This platform leverages decentralized finance (DeFi) to execute instant, risk-free trades by exploiting price discrepancies across multiple protocols using flash loans. With no collateral required, users can borrow and repay within a single transaction, maximizing profit potential. Experience the power of automation, efficiency, and financial innovation in the rapidly evolving DeFi landscape.",
    ghLink: "https://github.com/Rabeebaqdas/FlashLoanArbitrage",
  },
  {
    imgPath: gen,
    title: "Random NFT Gen",
    description:
      "Embark on a creative journey with my Random NFT Generator—a unique project that merges technology and artistic expression. Experience the thrill of generating one-of-a-kind NFTs with each click, producing digital artworks that blend innovation and creativity into a single masterpiece. Using blockchain technology, each NFT is verifiable, secure, and uniquely minted on the decentralized network. Whether you're an artist, collector, or enthusiast, this platform unlocks endless possibilities for digital art and Web 3.0 ownership.",
    ghLink: "https://github.com/Rabeebaqdas/Random_NFT_Generator",
  },
  // {
  //   imgPath: liq,
  //   title: "Liquidity Pool",
  //   description:
  //     "Dive into the world of decentralized finance with my Liquidity Pool Project—a groundbreaking platform that empowers users to contribute assets to liquidity pools and earn rewards. Seamlessly participate in the financial ecosystem by providing liquidity to DeFi protocols.",
  //   ghLink: "https://github.com/Rabeebaqdas/Liquidity-Pool",
  // },
  // {
  //   imgPath: raffle,
  //   title: "Automated Raffle",
  //   description:
  //     "Experience the thrill of chance with my automated raffle system—a modern twist on traditional luck-based games. Engage in exciting raffles where participants have the opportunity to win coveted prizes effortlessly. Through seamless automation, my raffle platform ensures fairness and transparency.",
  //   ghLink: "https://github.com/Rabeebaqdas/Automated-Raffle",
  //   demoLink: "https://automated-lottery.surge.sh/",
  // },
];

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
            {projects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
