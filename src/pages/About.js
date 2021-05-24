import styled from 'styled-components';

import A from '../components/Hyperlink';
import Strong from '../components/Strong';
import Container from '../components/Container';
import Section from '../components/Section';
import H2 from '../components/H2';


const Li = styled.li`
   padding-bottom: 5px;
`;

const About = () => {
   return (
      <Container>
         <Section>
            <H2>About this website</H2>
            <p>
               In the creation of this website, I used the following technologies:
            </p>
            <ul>
               <Li><A href="https://reactjs.org" target="_blank">React</A></Li>
               <Li><A href="https://styled-components.com" target="_blank">Styled Components</A></Li>
            </ul>
            <p>
               The <Strong>Programming on the Web</Strong> course that I took at UofT focused
               mostly on vanilla Javascript, and backend server-side programming
               using &#030;
               <Strong><A href="https://expressjs.com" target="_blank">Express</A></Strong>&#030;
               and <Strong><A href="https://mongodb.com" target="_blank">MongoDB</A></Strong>.
               This gave me a nice
               introduction to web development, but left me wanting to learn more about many of the
               modern web
               development technologies. This leads me into one of my motivations for creating this
               website&mdash;to learn &#030;
               <Strong><A href="https://reactjs.org" target="_blank">React</A></Strong>.
               Although I have clearly just scratched the
               surface of the React library, I feel as though I have suceeded in accomplishing this
               task, in the sense that I now have a deeper understanding of the power and purpose of
               React. I have enjoyed creating this simple website, and I would like to learn more
               modern web development in the future.
            </p>
         </Section>
      </Container>
   )
}

export default About
