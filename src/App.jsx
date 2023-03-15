import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Footer from './footer';
import FunButton from './FunButton';
import Workbox from './Workbox';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import logo from './assets/mux.png'
import sun from './assets/sun.png'
import rec from './assets/rectangle.png'


const FlexContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100vw;
`;

const OverContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 2rem;
  min-width: 100vw;
  align-items: center;
`;


const NavWrapper = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;


const IntroContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;


const PresContainer = styled.div`
display: flex;
flex-direction: column;
`;

const SunContainer = styled.div`
 position: absolute;
  top: 0;
  left: 80%;
  transform: translateX(-50%);
  max-width: 20.5rem;

`;

const RecContainer = styled.div`
margin-top: 16rem;
width: 100vw;

`;




const LogoContainer = styled.div`
display: flex;
  max-width: 3.5rem;
  max-height: 3rem;
  padding:5%;
  transition: transform 0.3s ease-in-out;
  align-items: flex-start; 
  &:hover {
    transform: rotate(+45deg) scale(1.1);
  }
`;

const StyledImg = styled.img`
width: 100%;`



/* const GridContainer = styled.div`
display: grid;
grid-template-rows: 7rem 10rem repeat(2, 1fr) 2rem;
grid-template-columns: 7rem repeat(4, 1fr);
min-height: 100vh;
grid-template-areas: 
"logo . top sun sun"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer"

;`

const LogoContainer = styled.div`
  max-width: 3.5rem;
  grid-area: logo;
  padding: 5%;
  align-self: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(+45deg) scale(1.1);
  }
`;

const SunContainer = styled.div`
  max-width: 18.5rem;
  grid-area: sun;
 
`;

const RecContainer = styled.div`
  width: 100;
  grid-area: rec;
 
`;

const StyledImg = styled.img`
width: 100%;`

const MainContainer = styled.div`
grid-area: main;`;


const StyledFooter = styled.footer`
grid-area: footer;
display: flex;
`;
 */

function App() {

  return (
    <Router>
      <FlexContainer>

        <OverContainer>
          <NavContainer> 
          
          <LogoContainer >
          <StyledImg src={logo} alt='logo' />
          </LogoContainer>
            
            <NavWrapper>
            <Navbar /></NavWrapper> 
            
            
            </NavContainer>
          <IntroContainer>
          
          <PresContainer><Presentation/></PresContainer>
 {/*          <SunContainer><StyledImg src={sun} /></SunContainer> */}

         


          </IntroContainer>
          
        </OverContainer>

        <RecContainer><StyledImg src={rec} /></RecContainer> 
          










      </FlexContainer>
    </Router>
  );
}

export default App

