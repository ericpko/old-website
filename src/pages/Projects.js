import styled from 'styled-components';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useParams,
   useRouteMatch
 } from "react-router-dom";

import Container from '../components/Container';
import A from '../components/Hyperlink';
import H2 from '../components/H2';
import Section from '../components/Section';



const Li = styled.li`
   /* margin: 0 0 4px 0; */
   padding-bottom: 5px;
`;

const StyledLink = styled(Link)`
   color: ${props => props.theme.colors.black};
   text-decoration: none;
   transition: color 0.2s ease-out;

   :hover {
      color: ${props => props.theme.colors.brand};
   }
`;


const Project = () => {
   // The <Route> that rendered this component has a
   // path of `/topics/:topicId`. The `:topicId` portion
   // of the URL indicates a placeholder that we can
   // get from `useParams()`.
   let { topicId } = useParams();

   return (
      <div>
         <h3>{topicId}</h3>
      </div>
   );
}


const Projects = () => {
   let { path, url } = useRouteMatch();

   return (
      <Container>
         <Section>
            <H2>Projects</H2>
            <p>
               Blah blah blah blah bob blah alefjaowihf awoif haowhf aowh fowiahef o iowiaf 
               awefoi awief awofh owahfoiaw ofi awfio who hfoiehfawiyghoawh gah oawhfiowaf
               I can type on my new keyboard wooooheeeeee.
            </p>
            <ul>
               <Li>
                  <StyledLink to={`${url}/1D-mass-springs`}>1D mass-springs</StyledLink>
               </Li>
               <Li>
                  <StyledLink to={`${url}/3D-mass-springs`}>3D sass-spring system</StyledLink>
               </Li>
               <Li>
                  <StyledLink to={`${url}/3D-FEM`}>Finite element method</StyledLink>
               </Li>
               <Li>
                  <StyledLink to={`${url}/FEM-cloth-sim`}>Finite elements for cloth simulation</StyledLink>
               </Li>
            </ul>
            <Switch>
               <Route exact path={path}>
                  <h3>Go ahead</h3>
               </Route>
               <Route path={`${path}/:topicId`} component={Project} />
            </Switch>
         </Section>
      </Container>
   )
}

export default Projects
