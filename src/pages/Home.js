import styled from 'styled-components';

import tennisPic from '../images/tennisPic1.jpg';
import CV from '../CV/CV_2.pdf';


const Container = styled.div`
   width: 960px;
   margin: auto;
`;

const H1 = styled.h1`
   text-align: center;
   color: ${props => props.theme.colors.darker};
   font-size: 3em;
   margin: 6px;
`;

const Img = styled.img`
   display: block;
   border-radius: 10%;
   max-width: 40%;
   height: auto;
   margin: auto;
`;

const Section = styled.section`
   padding-left: 4%;
   padding-right: 4%;
   /* padding: 4%; */
`;

const H2 = styled.h2`

`;

const A = styled.a`
   color: black;
   text-decoration: none;
   font-style: italic;

   :visited {
      color: hotpink;
   }

   :hover {
      color: ${props => props.theme.colors.brand};
      /* background-color: ${props => props.theme.colors.brand}; */
      text-decoration: underline;
   }
`;


const Home = () => {
   return (
      <Container>
         <H1>Eric Koehli</H1>
         <Img src={tennisPic} alt="Me and my tennis racket standing by the water." />
         <Section>
            <H2>Bio</H2>
            <p>
               I'm a recent graduate from the University of Toronto, St. George (downtown) 
               campus, where I completed the Computer Science Specialist program (HBSc).
               Throughout my program I experimented with a number of different topics
               in CS and I found myself drawn to the field of <strong>Computer Graphics</strong>.
            </p>
            <p>
               Academically, I'm most excited about the applications and theory behind the field of <strong>Computer Graphics</strong>. More
               specifically, I'm interested in, physics-based simulations, animation, and
               different rendering techniques.
               I look forward to hopefully contributing to this important field of computer science, both academically and in the industry.
               I am also eager to explore more about <strong>modern web technologies</strong>, <strong>game design</strong>, and <strong>A.I.</strong> research.
               Throughout my studies, I have aquired great problem solving skills and have gained experience with a variety of programming
               languages and software tools. You can find a link to my Github page <strong><A href="https://github.com/ericpko" target="_blank">here</A></strong>,
               or check out my <strong><A href={CV} target="_blank">resume</A></strong> for more information.
            </p>
         </Section>
      </Container>
   )
}

export default Home
