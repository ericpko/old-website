import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from './Container';


const Nav = styled.nav`
   background-color: ${props => props.theme.colors.darker};
   width: 100vw;
   max-width: 100%;
   flex-shrink: 0;
`;

const Ul = styled.ul`
   display: flex;
   list-style: none;
   padding: 0;
`;

const Li = styled.li`
   padding-left: 2%;
   padding-right: 2%;
`;

const LiLeft = styled(Li)`
   margin-left: auto;
`;

const StyledLink = styled(Link)`
   color: ${props => props.theme.colors.white};
   text-decoration: none;
   transition: color 0.2s ease-out;

   :hover {
      color: ${props => props.theme.colors.brand};
   }
`;


const Navbar = () => {
   return (
      <Nav>
         <Container>
            <Ul>
               <Li>
                  <StyledLink to='/'>Home</StyledLink>
               </Li>
               <Li>
                  <StyledLink to='/projects'>Projects</StyledLink>
               </Li>
               <Li>
                  <StyledLink to='/about'>About</StyledLink>
               </Li>
               <LiLeft>
                  <StyledLink to='/contact'>Contact</StyledLink>
               </LiLeft>
            </Ul>
         </Container>
      </Nav>
   )
}

export default Navbar
