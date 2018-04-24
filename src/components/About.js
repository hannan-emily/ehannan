import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class About extends Component {
  render() {

    return (
      <Router>
        <div className="row about">

          <a className="anchor" id="about"></a>

          <div className="col s12 m6">
            <img className="responsive-img" src="./img/profile.jpg" alt="" />
          </div>

          <div className="col s12 m6 project-text-2">
            <h3>Meet Emily</h3>
            <p>Designer of immersive applications that bring in influences of outdoor
            exploration. I’m a client-facing developer who works well in broader
            multi-disciplinary teams. Experienced in fast paced environments, I create
            efficient, on-time products. With a background in design, creative content,
            immersive drawing installations and sculpture, I develop experiential,
            feeling applications.</p>
            <h4>Let&#39;s Connect!</h4>
              <a href="https://www.linkedin.com/in/emilyhannan" target="_blank" rel="noopener noreferrer" >
                <img className="logo-about responsive-img" src="./img/logo-linkedin.png" alt="" />
              </a>
              <div className="logo-about"></div>
              <a href="https://www.github.com/hannan-emily" target="_blank" rel="noopener noreferrer" >
                <img className="logo-about responsive-img" src="./img/logo-github.png" alt="" />
              </a>
          </div>

        </div>
      </Router>
    )
  }
}


export default About;
