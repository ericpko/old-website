import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
import H2 from '../../components/H2';
import Creative from '../../images/raytracer/creative.png';
import SpherePacking from '../../images/raytracer/sphere-packing.png';
import SphereAndPlane from '../../images/raytracer/sphere-and-plane.png';
import TwoSpheres from '../../images/raytracer/two-spheres-and-plane.png';
import SphereLarge from '../../images/raytracer/sphere-large-change.png';



const Img = styled.img`
   max-width: 100%;
   height: auto;
   width: auto;
`;


const RayTracer = () => {
   return (
      <Container>
         <section>
            <H2>Ray Tracing</H2>
            <p>
               Shown below are some neat rendered images from my ray tracer
               written entirely in Rust.
            </p>
         </section>
         <section>
            <Img src={Creative} alt="Rendered image from my ray tracer" />
            <Img src={SpherePacking} alt="Rendered image from my ray tracer" />
            <Img src={SphereAndPlane} alt="Rendered image from my ray tracer" />
            <Img src={TwoSpheres} alt="Rendered image from my ray tracer" />
            <Img src={SphereLarge} alt="Rendered image from my ray tracer" />
         </section>
      </Container>
   )
}

export default RayTracer
