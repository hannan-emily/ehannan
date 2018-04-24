import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Home />
          <Projects />
          <Technologies />
          <About />
          <Contact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
