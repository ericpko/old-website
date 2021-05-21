import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Header = styled.header`
   background-color: ${props => props.theme.colors.darker};
   position: fixed; // relative?
   display: flex;
   width: 100%;
`;

const Container = styled.div`
   margin-right: auto;
   margin-left: auto;
   width: 1260px;
   padding-right: 10px;
   padding-left: 10px;
`;

const Ul = styled.ul`
   list-style: none;
`;

const Li = styled.li`
   display: inline;
   padding-right: 30px;
`;

const StyledLink = styled(Link)`
   color: ${props => props.theme.colors.white};
   font-size: 18px;
   text-decoration: none;
   align-items: center;
   transition: color 0.2s ease-out;

   :focus {
      outline: 0;
      color: white;
   }

   :hover:not(:focus) {
      color: ${props => props.theme.colors.brand};
   }
`;

const Nav = () => {
   return (
      <nav>
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
            <Li>
               <StyledLink to='/contact'>Contact</StyledLink>
            </Li>
         </Ul>
      </nav>
   )
}


const Navbar = () => {
   return (
      <Header>
         <Container>
            <Nav />
         </Container>
      </Header>
   )
}


export default Navbar;
