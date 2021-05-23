import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';


// Import the router
import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";

 // Import components
 import Navbar from './components/Navbar';

 // Import pages
 import Home from './pages/Home';


function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Navbar />
            <Switch>
               <Route exact path="/" component={Home} />
            </Switch>
         </Router>
      </ThemeProvider>
   );
}

export default App;
