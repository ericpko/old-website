import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
   display: flex;
   background-color: ${props => props.theme.colors.darker};
   position: relative; /* default is relative */
   width: 100%;
`;

const Container = styled.div`
   width: 960px;
   margin: auto;
   position: relative;
`;

const Ul = styled.ul`
   display: flex;
   list-style: none;
   padding-right: 4%;
   padding-left: 4%;
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
   font-size: 20px;
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
