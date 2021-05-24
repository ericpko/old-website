import styled from 'styled-components';


const Footer = styled.footer`
   background-color: ${props => props.theme.colors.dark};
   color: white;
   position: relative;
   width: 100vw;
   max-width: 100%;
   min-height: 350px;
   bottom: 0;
   margin: 8rem auto auto auto;
   flex-shrink: 0;
`;

// const Container = styled.div`
//    width: 960px;
//    margin: auto;
// `;

// const Footer = () => {
//    return (
//       <StyledFooter>
//          <Container>
//             <p>
//                Designed by Eric Koehli
//             </p>
//          </Container>
//       </StyledFooter>
//    )
// }

export default Footer
