import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="col s12" id="videoRow">

            <div className="col s12 video-title">
              <h2 className="h2-title">EMILY HANNAN</h2>
              <h5 className="h4-title">development / design</h5>
            </div>

            <div className="col s12 videodiv">
              <video id='background-video' loop autoPlay>
                <source id="video" src='img/starrySky.mp4' type='video/mp4' />
              </video>
            </div>

        </div>
    </Router>
    );
  }
}

export default Home;
