import styled from 'styled-components';

import A from '../components/Hyperlink';
import Strong from '../components/Strong';
import CV from '../CV/CV_2.pdf';
import Container from '../components/Container';
import Section from '../components/Section';



const H2 = styled.h2`
   margin-top: 4rem;
   color: ${props => props.theme.colors.darker};
`;

const Li = styled.li`
   padding-bottom: 5px;
`;


const Contact = () => {
   return (
      <Container>
         <Section>
            <H2>Contact Info</H2>
            <p>
               <strong>eric.koehli@mail.utoronto.ca</strong>
            </p>
            <H2>Links</H2>
            <ul>
               <Li><Strong><A href="https://github.com/ericpko" target="_blank">Github</A></Strong></Li>
               <Li><Strong><A href={CV} target="_blank">Resume/CV</A></Strong></Li>
               <Li><Strong><A href="https://www.linkedin.com/in/erickoehli" target="_blank">LinkedIn</A></Strong></Li>
            </ul>
         </Section>
      </Container>
   )
}

export default Contact
