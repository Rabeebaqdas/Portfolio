import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram,BsTelegram, BsChevronDown } from "react-icons/bs";
import { FaDiscord  } from "react-icons/fa";
import avatar from "./../../images/hi.png";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>💻{"   "}<a href="rabeebaqdas@gmail.com" className="contact-link">Hire Me!</a></Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }

  return(
    <>
    <Alert />
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hi! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">Rabeeb</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>passionate <span className="name">BLOCKCHAIN DEVELOPER</span> from Pakistan with almost 1 years of experience in blockchain development, enthusiastic about blockchain and web3 industry, looking forward to learn something new every day and contribute to the industry!</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/rabeebaqdas" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://twitter.com/aqdasrabeeb" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
         
            <a href="https://www.instagram.com/rabeebaqdas/" target="_blank">
              <BsInstagram className="icon" />  
            </a>
          </div>

          <a href="mailto:rabeebaqdas@gmail.com">
            <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Rabeeb Bitmoji" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;