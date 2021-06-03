import React from 'react';
import styled from 'styled-components';

import A from '../components/Hyperlink';
import Strong from '../components/Strong';
import CV from '../CV/CV_2.pdf';
import Container from '../components/Container';
import H2 from '../components/H2';



const Li = styled.li`
   padding-bottom: 5px;
`;


const Contact = () => {
   return (
      <Container>
         <section>
            <H2>Contact Info</H2>
            <p>
               <address>
                  Email: <strong><A href="mailto:eric.koehli@mail.utoronto.ca">eric.koehli@mail.utoronto.ca</A></strong>
               </address>
            </p>
            <H2>Links</H2>
            <ul>
               <Li><Strong><A href={CV} target="_blank">Resume/CV</A></Strong></Li>
               <Li><Strong><A href="https://github.com/ericpko" target="_blank">Github</A></Strong></Li>
               <Li><Strong><A href="https://www.linkedin.com/in/erickoehli" target="_blank">LinkedIn</A></Strong></Li>
            </ul>
         </section>
      </Container>
   )
}

export default Contact;
