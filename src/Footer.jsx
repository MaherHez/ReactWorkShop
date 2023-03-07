import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;

`;

const StyledLinkIcon = styled.a`
display: flex;
justify-content: center;
align-items: center;
  color: black;
  grid-area: footer;
  margin: 1rem;
  font-size: 1.5rem;
/* background-color: white;
border-radius: 50%;
width: 2rem;
height: 2rem; */
  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;
const StyledContact = styled.div `
font-size: 1rem;
color: white;
grid-area: footerL;
`;


function Footer() {
    return (
        <StyledFooter>
            <StyledLinkIcon href="https://github.com/MaherHez"><FaGithub /></StyledLinkIcon>
            <StyledLinkIcon href="https://www.linkedin.com/in/maherhezam/"><FaLinkedin /></StyledLinkIcon>
            <StyledLinkIcon href="https://github.com/MaherHez"><FaFigma /></StyledLinkIcon>
        </StyledFooter>
    )
}

export default Footer;
