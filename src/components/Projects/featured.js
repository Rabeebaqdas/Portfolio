import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nfstay from "../nfstay.png";
import cod from "../cod.png";
import degen from "../degen.png";
import btcpx from "../btcpx.png";
import iamdivinity from "../iamdivinity.png";
import airbncapital from "../airbncapital.png";

const projects = [
  {
    imgPath: nfstay,
    title: "NFsTay RWA",
    description:
      "NFsTay RWA is a decentralized platform enabling users to co-own high-yield real estate properties worldwide, starting with investments as low as $1,000. Co-owners actively participate in key property decisions through a democratic voting system, ensuring transparency and control over their investments. The platform automates monthly income distribution from rental profits, providing a seamless profitability-sharing experience. Properties are strategically selected for long-term capital appreciation, offering co-owners assets expected to appreciate over time.",
    demoLink: "https://nfstay.com/",
  },
  {
    imgPath: iamdivinity,
    title: "IAMDIVINITY",
    description:
      "IAMDIVINITY is a blockchain-based decentralized application (DApp) that integrates spiritual and lifestyle learning with a rewards-driven referral model. Users can purchase exclusive personal growth courses and earn bonuses by referring others. The platform ensures transparency and security through blockchain integration, automates fair rewards distribution via smart contracts, and maintains a decentralized architecture for secure data tracking. Administrators have real-time visibility into the network, facilitating efficient reward validation and distribution.",
    demoLink: "https://iamdivinity.io/",
  },
  {
    imgPath: cod,
    title: "Crypto on Discount",
    description:
      "COD is a decentralized platform enhancing cryptocurrency investments by offering high-yield staking options and exclusive discounts. Users can stake their USDC (BEP-20) tokens for attractive returns and list their crypto assets to boost visibility. The platform generates revenue through automated trading, bots, and Uniswap validator rewards. Key features include high-yield staking, revenue sharing from trading activities, exclusive cryptocurrency purchase discounts, enhanced crypto asset visibility, and special discounts for new users.",
    demoLink: "https://cryptoondiscount.com/",
  },
  {
    imgPath: degen,
    title: "Degen Forest",
    description:
      "Degen Forest is a decentralized Web3 platform offering the Degen Wallet, an all-in-one crypto solution integrating DeFi, NFTs, staking, and yield farming, available on Android and iOS. The platform operates under a DAO governance model, allowing Moola Token holders to participate in decision-making and earn rewards through staking. Revenue is generated via services like swaps and NFT listings, with a 0.69% fee, part of which is used to buy and burn Moola Tokens, enhancing their value.",
    demoLink: "https://degenforest.com/",
  },
  {
    imgPath: airbncapital,
    title: "AirbnCapital",
    description:
      "AirbnCapital is a decentralized platform revolutionizing real estate investments through blockchain technology. Users can farm STAY tokens, stake ROCK NFTs for passive rewards, and trade NFTs in the marketplace. The platform enables seamless STAY purchases with crypto and allows users to mint ROCK NFTs using USDC. Its referral program rewards users with $25 when referees purchase ROCK NFTs. With security, transparency, and profitability at its core, AirbnCapital offers a dynamic ecosystem for digital real estate and NFT investments.",
    demoLink: "https://www.airbncapital.com/",
  },
  {
    imgPath: btcpx,
    title: "BTC PROXY",
    description:
      "BTC Proxy is a decentralized protocol enabling Bitcoin tokenization across Ethereum, Polygon, and BNB Chain. It offers features like Bitcoin farming, allowing PRXY token holders to earn BTCpx rewards, and compound staking through a rebase mechanism. The protocol also supports bonding, where users can exchange assets for discounted PRXY tokens, enhancing liquidity. Additionally, BTC Proxy provides interest-bearing products and utilizes NFT keys and vaults for yield optimization, positioning itself as a leader in Bitcoin DeFi solutions.",
    demoLink: "https://btcproxy.io/",
  },
];

function Projects() {
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
