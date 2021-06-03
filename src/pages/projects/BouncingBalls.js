
import Container from '../../components/Container';
import H2 from '../../components/H2';
import Balls from '../../components/Balls';




const BouncingBalls = () => {
   return (
      <Container>
         <H2>Bouncing Balls</H2>
         <p>
            Colorful bouncing balls with some simple collision detection and
            forward Euler integration!
         </p>
         <Balls />
      </Container>
   )
}

export default BouncingBalls
