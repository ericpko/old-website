import Container from '../../components/Container';
import H2 from '../../components/H2';
import SPHSimPdf from '../../pdfs/SPH-sim.pdf';
import Strong from '../../components/Strong';
import A from '../../components/Hyperlink';
import SPHdemo from '../../images/sphDemo.gif';



const SPHSim = () => {
   return (
      <Container>
         <section>
            <H2>2D Smoothed-Particle Hydrodynamics</H2>
            <p>
               This was the final project I chose for my physics-based animation course at UofT.
               Check out my short SIGGRAPH paper &#030;
               <Strong><A href={SPHSimPdf} target="_blank">here</A></Strong>&#030;
               where you can find all the details from this project and below is a demo
               of the result!
            </p>
            <img src={SPHdemo} alt="Short gif showing the results of the SPH simulation" />
         </section>
      </Container>
   )
}

export default SPHSim
