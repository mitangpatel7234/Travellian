import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterInfo>
          <FooterLogo className="logo">

        <img src={logo} alt="" />
          <Logo>Travellian</Logo>
          </FooterLogo>
          <Copyright>
            &copy; {new Date().getFullYear()} Travellian. All rights reserved.
          </Copyright>
        </FooterInfo>
        <FooterLinks>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
        <SocialLinks>
          <SocialIcon href="#">
            <BsFacebook />
          </SocialIcon>
          <SocialIcon href="#">
            <BsInstagram />
          </SocialIcon>
          <SocialIcon href="#">
            <BsLinkedin />
          </SocialIcon>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #FFF8F1;
  padding: 3rem 0;
`;
const FooterLogo = styled.div`
display: flex;
gap: 0.4rem; 
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Logo = styled.h2`
  color: #FF7757;
  font-size: 2rem;
`;

const Copyright = styled.p`
  color: #666;
`;

const FooterLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin-bottom: 2rem;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-right: 2rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #FF7757;
  }
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #FF7757;
  }
`;

export default Footer;
