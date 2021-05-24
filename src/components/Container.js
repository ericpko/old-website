import styled from 'styled-components';


/**
 * max-width makes it so that when you shrink the site horizontally,
 * everything resizes so there is no horizontal scrollbar.
 */
const Container = styled.div`
   max-width: 960px;
   margin: auto;
   flex: 1 0 auto;
   padding-left: 2%;
   padding-right: 2%;
`;

export default Container
