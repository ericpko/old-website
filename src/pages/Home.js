import styled from 'styled-components';

import tennisPic from '../images/tennisPic1.jpg';
import CV from '../CV/CV_2.pdf';

import A from '../components/Hyperlink';
import Strong from '../components/Strong';
import Container from '../components/Container';
import Section from '../components/Section';



const H1 = styled.h1`
   text-align: center;
   color: ${props => props.theme.colors.darker};
   font-size: 3rem;
   margin-top: 10px;
   margin-bottom: 10px;
`;

const H2 = styled.h2`
   color: ${props => props.theme.colors.darker};
`;

const Img = styled.img`
   display: block;
   border-radius: 10%;
   max-width: 50%;
   height: auto;
   margin: auto;
`;


const Li = styled.li`
   /* margin: 0 0 4px 0; */
   padding-bottom: 5px;
`;


/**
 * Note: &nbsp; can be used as a non-breaking space character. Use it between
 * words that you don't want split up such as Computer&nbsp;Science.
 */
const Home = () => {
   return (
      <Container>
         <H1>Eric Koehli</H1>
         <Img src={tennisPic} alt="Me and my tennis racket standing by the water." />
         <Section>
            <H2>Bio</H2>
            <p>
               I recently graduated from the University of Toronto, St. George (downtown)
               campus with an HBSc in <Strong>Computer Science</Strong>.
               Throughout my program I experimented with a wide range of different topics
               in CS and I found myself most strongly drawn to the field of &#030;
               <Strong>Computer Graphics</Strong>. More specifically, some of my favorite
               topics in CG include physics-based simulation, animation, and different
               rendering techniques. I look forward to contributing to this important field
               of Computer Science, both academically and in the industry.
            </p>
            <p>
               I'm also eager to explore more about <Strong>modern web technologies</Strong>, &#030;
               <Strong>game design</Strong>, and <Strong>A.I.</Strong> research.
               Throughout my studies, I have aquired great problem solving skills and have gained 
               experience with a variety of programming languages and software tools. 
               You can find a link to my Github page &#030;
               <Strong><A href="https://github.com/ericpko" target="_blank">here</A></Strong>,
               or check out my <Strong><A href={CV} target="_blank">resume</A></Strong> for 
               more information.
            </p>
            <p>
               On a personal level, I'm a well-rounded individual who enjoys playing
               racket sports such as tennis, badminton, and table tennis.
               I have several achievements in tennis, from which I used to compete competatively.
               I also enjoy paddleboarding, working out, and maintaining a healthy lifestyle.
            </p>
         </Section>
         <Section>
            <H2>Courses</H2>
            <p>
               Below is a list of relevant CS and math courses I've taken. I have included the
               main programming language or library in brackets for the applicable courses.
            </p>
            <ul>
               <Li>CSC108: Introduction to Computer Programming (Python)</Li>
               <Li>MAT137: Calculus I (Full year)</Li>
               <Li>CSC148: Introduction to Computer Science (Python)</Li>
               <Li>CSC165: Mathematical Expression and Reasoning for Computer Science</Li>
               <Li>CSC207: Software Design (Java)</Li>
               <Li>CSC209: Software Tools and Systems Programming (C)</Li>
               <Li>MAT223: Linear Algebra I</Li>
               <Li>MAT235: Multivariable Calculus (Full year)</Li>
               <Li>CSC236: Theory of Computation</Li>
               <Li>MAT244: Ordinary Differential Equations</Li>
               <Li>PHL245: Modern Symbolic Logic</Li>
               <Li>STA247: Probability with Computer Applications</Li>
               <Li>CSC258: Computer Organization (Verilog)</Li>
               <Li>CSC263: Data Structures and Analysis</Li>
               <Li>CSC309: Programming on the Web (Javascript)</Li>
               <Li>CSC318: The Design of Interactive Computational Media</Li>
               <Li>CSC343: Databases (SQL)</Li>
               <Li>CSC367: Parallel Programming (C/C++)</Li>
               <Li>CSC369: Operating Systems (C)</Li>
               <Li>CSC373: Algorithm Design, Analysis & Complexity</Li>
               <Li>CSC384: Artificial Intelligence (Python)</Li>
               <Li>CSC404: Video Game Design (Unity/C#) </Li>
               <Li>CSC417: Physics-based Animation (C++)</Li>
               <Li>CSC418: Computer Graphics (C++)</Li>
               <Li>CSC419: Geometry Processing (C++)</Li>
            </ul>
         </Section>
      </Container>
   )
}

export default Home
