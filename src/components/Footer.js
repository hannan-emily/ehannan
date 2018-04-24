import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <Router>
        <div className="col s12">
          <h4>This app built with React</h4>
        </div>
      </Router>
    );
  }
}

export default Footer;
