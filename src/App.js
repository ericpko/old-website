import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './App.css';

// Import the router
import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";

 // Import components
 import Navbar from './components/Navbar';


function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Navbar />
            <Switch>
               // Routes
            </Switch>
         </Router>
      </ThemeProvider>
   );
}

export default App;
