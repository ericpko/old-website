import React from 'react';
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
 import Footer from './components/Footer';

 // Import pages
 import Home from './pages/Home';
 import Projects from './pages/Projects';
 import About from './pages/About';
 import Contact from './pages/Contact';



function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Navbar />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/projects" component={Projects} />
               <Route path="/about" component={About} />
               <Route path="/contact" component={Contact} />
            </Switch>
         </Router>
         <Footer />
      </ThemeProvider>
   );
}

export default App;
