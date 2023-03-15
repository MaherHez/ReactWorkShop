import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

const MyButton = styled.button`
  padding: 1em;
  background-color: #386641;
  border-radius: 50px;
  color: white;
  border: none;
  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
  }
`;

const StyledSmallBox = styled.div`
  padding: 1em;
  border-radius: 25px;
  color: black;
  border: none;
  visibility: hidden;
  opacity: 0;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    visibility: visible;
    opacity: 1;
    padding: 1em;
    border-radius: 25px;
    color: black;
    border: 1px black solid;
   
  }
`;


const StyledSmallLink = styled(Link)`
  color: black;
  grid-area: top;
  font-size: 0.6rem;
  margin: 0.6rem;
  &:hover {
    transform: scale(1.1);
  }

`;






const StyledBarButton = styled.button`
  visibility: none;
  opacity: 0;

  @media only screen and (max-width: 600px) {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  grid-area: top;
  margin: 0.6rem;
  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 1s;
    transform: translateY(-100vh); 
  }
`;

const Navbar = () => {
  const [open, SetOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <StyledLink to="/portfolio">Work</StyledLink>
        <StyledLink to="/about">About me</StyledLink>
        <MyButton>
          <StyledLink to="/contact">Contact</StyledLink>
        </MyButton>
      </StyledNav>
      <>
        <StyledBarButton onClick={() => SetOpen(!open)} >
          {open ? <FaBars /> :  <FaTimes />}
        </StyledBarButton>

        {open && (
          <StyledSmallBox>
            <StyledSmallLink to="/portfolio">Work</StyledSmallLink>
            <StyledSmallLink to="/about">About me</StyledSmallLink>
            <StyledSmallLink to="/contact">Contact</StyledSmallLink>
          </StyledSmallBox>
        )}
      </>
    </>

  );
};

export default Navbar;



/* 
<StyledCloseButton  onClick={ShowNavbar}>
<FaTimes />
</StyledCloseButton>
<StyledBarButton onClick={ShowNavbar}>
<FaBars />
</StyledBarButton>
 */

















/* 
const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <StyledNav>
      <StyledLink to="/portfolio">Work</StyledLink>
      <StyledLink to="/about">About me</StyledLink>
      <MyButton>
        <StyledLink to="/contact">Contact</StyledLink>
      </MyButton>

     {/*  <StyledCloseButton>
         <FaTimes  /> 
      </StyledCloseButton>
 */
/*       <StyledBarButton onClick={() => setExtendNavbar(!extendNavbar)}>
       <FaBars />
      </StyledBarButton>

      {extendNavbar ? <FaBars /> : <FaTimes />}
    </StyledNav>
  );
};

export default Navbar; */













/* import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`;

const MyButton = styled.button`
  padding: 1em;
  background-color: #386641;
  border-radius: 50px;
  color: white;
  border: none;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
    color: black;
    grid-area: top;
    margin: 0.6rem; &:hover {
    transform: scale(1.1);
  }
`;
const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/portfolio">Work</StyledLink>
            <StyledLink to="/about">About me</StyledLink>
            <MyButton>
            <StyledLink to="/contact">Contact</StyledLink></MyButton>
        </StyledNav>
    );
}

export default Navbar;
 */







