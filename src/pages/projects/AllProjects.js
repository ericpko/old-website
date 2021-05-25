import styled from 'styled-components';
import { 
   Link,
   useRouteMatch,
} from 'react-router-dom';

import Container from '../../components/Container';
import Section from '../../components/Section';
import H2 from '../../components/H2';
import Strong from '../../components/Strong';
import A from '../../components/Hyperlink';


const H3 = styled.h3`
   color: ${props => props.theme.colors.darker};
   margin-bottom: 0;
`;

const P = styled.p`
   margin-top: 0;
`;

const Post = styled(Section)`
   padding-bottom: 0;
`;

const StyledLink = styled(Link)`
   color: ${props => props.theme.colors.link};
   text-decoration: none;
   transition: color 0.2s ease-out;

   :hover {
      color: ${props => props.theme.colors.brand};
   }
`;

const AllProjects = () => {
   let { url } = useRouteMatch();

   return (
      <Container>
         <Section>
            <H2>Projects</H2>
            <p>
               Below is a list of projects I've worked on in no particular order.
            </p>
         </Section>

         <Post>
            <H3><StyledLink to={`${url}/2D-SPH-simulation`}>2D Smoothed-particle hydrodynamics</StyledLink></H3>
            <P>
               Simulation of the classical dam break using 2D SPH based on the article by
               Muller et al.: <br/>
               <Strong>
                  <A href="https://matthias-research.github.io/pages/publications/sca03.pdf" 
                     target="_blank">
                        Particle-Based Fluid Simulation for Interactive Applications
                  </A>
               </Strong>
            </P>
         </Post>
         <Post>
            <H3><StyledLink to={`${url}/1D-mass-spring`}>1D Mass Spring</StyledLink></H3>
            <P>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
               culpa qui officia deserunt mollit anim id est laborum.
            </P>
         </Post>
         <Post>
            <H3><StyledLink to={`${url}/3D-mass-spring-system`}>3D Mass Spring System</StyledLink></H3>
            <P>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
               culpa qui officia deserunt mollit anim id est laborum.
            </P>
         </Post>
      </Container>
   )
}

export default AllProjects
