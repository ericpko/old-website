import styled from 'styled-components';


const A = styled.a`
   color: ${props => props.theme.colors.darker};
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


export default A;
