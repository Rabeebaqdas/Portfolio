import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard2 from "./ProjectCards2";
import Particle from "../Particle";
import btcpx from "../btcpx.png"
import high from "../thc.png"
import trapdart from "../trapdart.png"
import market from "../nftm.png"
import hotei from "../hotei.png"
import defi from "../defiswap.png"
import air from "../air.png"
import legacy from "../legacy.png"
import unicorn from "../unicorn.png"
import qorra from "../qorra.png"
import whales from "../whales.PNG"
import gala from "../gala.PNG"
import crnt from "../crnt.PNG"
import dapp from "../dapp.PNG"
import cip from "../cip.PNG"
import Footer from "../Footer";

function Featured() {



  return (
    <>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Featured <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few featured projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={btcpx}
              isBlog={false}
              title="BTC Proxy"
              description="BTC Proxy is a multi-institutional protocol for the decentralized tokenization of Bitcoin on ERC20 and MRC20 formats utilizing the Proxy Relay."
              demoLink="https://www.btcproxy.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={high}
              isBlog={false}
              title="The High club"
              description="The High Club is an exclusive well-being project, which will be launched on the Ethereum Blockchain. Become a member of The High Club by minting the one-of-a-kind NFT."
              demoLink="https://mint.thehighclub.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={air}
              isBlog={false}
              title="Air Brick"
              description="Air Brick is a decentralized finance (DeFi) platform built to create and facilitate a token pegged on USDT. It Brings Opportunities for tokens."
              demoLink="https://airbrick.co.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={legacy}
              isBlog={false}
              title="Legacy"
              description="Discover a groundbreaking NFT Marketplace where deploying your wrapped NFTs to V2 unlocks exclusive perks and elevated benefits for both creators and collectors."
              demoLink="https://royalty-aggregator-v1.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={hotei}
              isBlog={false}
              title="Hotei Energy"
              description="Hotei Energy Share Token (HEST)™© is a token created and published on the Binance Smart Chain network (BEP20), whose objective is to serve as a support economic for the development of the activities."
              demoLink="https://hotieenergy.pluton.ltd/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={trapdart}
              isBlog={false}
              title="Trap Dart"
              description="Trapdart is an Initial coin offering (ICOs) based project that raises funds for products and services usually related to cryptocurrency. Collecting millions of worth of tokens and utilizing them for the better."
              demoLink="https://trapdart.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={defi}
              isBlog={false}
              title="DeFi Swap"
              description="DEFISwap is a Decentralized Exchange (DEX), utilizing the automated market maker (AMM) protocol for defining digital asset prices and providing liquidity, built on Binance Smart Chain (BSC)."
              demoLink="https://defiswap.pluton.ltd/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={market}
              isBlog={false}
              title="NFT Marketplace"
              description="This is a non-fungible token (NFT) marketplace. Immerse yourself in a world where a user can buy, sell, and trade your unique NFTs, unlocking a realm of limitless possibilities. The Future of Web3.0."
              demoLink="https://nftmarket.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={unicorn}
              isBlog={false}
              title="Summer Unicorn"
              description="Immerse yourself in a streamlined experience, tailored to minting and showcasing this specific NFT type with unmatched simplicity and precision."
              demoLink="https://crypto-z.agency/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={qorra}
              isBlog={false}
              title="Qorra ICO"
              description="Revolutionizing the future of decentralized finance by offering a blockchain-powered ecosystem that seamlessly connects traditional financial markets with the innovation of cryptocurrencies. Join us in shaping the next generation of financial services."
              demoLink="https://www.pinksale.finance/launchpad/0x47149c640833Fd93Fe4c7Ef78C08aebB73233f76?chain=ETH"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={whales}
              isBlog={false}
              title="Whales AI"
              description="Whalesai can help you automate tasks with the help of artificial intelligence. Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. AI can mimic a human mind."
              demoLink="https://www.whalesai.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={crnt}
              isBlog={false}
              title="Creation Network ICO"
              description="Creationnetwork is an innovative platform that empowers global internet users by providing a comprehensive suite of tools for content creation, marketing, podcasting, and social media management. It simplifies and enhances."
              demoLink="https://www.crnt.surge.sh"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={gala}
              isBlog={false}
              title="Galarace"
              description="Galarace.ai is a revolutionary new way to play and earn rewards. It is a blockchain-based game that allows players to earn rewards for playing and completing tasks. Players can earn rewards in the form of tokens, which can be used to purchase in-game items or exchanged for real-world currency."
              demoLink="https://www.galarace.ai"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={dapp}
              isBlog={false}
              title="Super DApp"
              description="Our ecosystem facilitates the users to build their commodity-backed portfolios with S39 Global's software, which uses NFT minting technology. This provides equal opportunity for project owners to grow their businesses through mass market adoption on single platform. S39 Super DApps sells commodity-backed NFTs."
              demoLink="https://www.superdapps.net"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={cip}
              isBlog={false}
              title="CIP Staking"
              description="Crypto Index Pool is a simplified and secure participation in Staking, generating yield by interacting the Smart contract mechanism. CIP token has made a stealth launch on the most advance chain in the crypto which is ARBITRUM. Expanding the community by P2P networking with a mission to create space in the Blockchain Field."
              demoLink="https://www.cryptoindexpool.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>

    </>
  );
}

export default Featured;
