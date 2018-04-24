import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Projects extends Component {

  render() {

    return (
      <Router>
        <div className="row">

          <a className="anchor" id="projects"></a>

          <div className="row projects">
            <div className="col s12">
                <div className="offset-m8 col m3 project-text hide-on-small-only">
                <h2>PNW OVERLAND</h2>
                <p>PNW Overland is your interactive guide to backcountry road adventures in the
                Pacific Northwest. All you need to explore our world-famous mountain
                roads, with interactive maps, real dashcam videos and GIS information.</p>

                  <div className="col s6">
                    <a className='button btn' href="https://pnw-overland.herokuapp.com" target="_blank" rel="noopener noreferrer">DEMO</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/hannan-emily/pnw-overland" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-node-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-express-square50.png" alt="" />
                      <h6 className="logo-tiny">EJS &nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">POSTGRESQL&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">BCRYPT&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">ASYNC&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">GOOGLE MAPS API&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
                <img className="col s12 hide-on-med-and-up" src="./img/cover-pnw-overland.png" />

                <div className="offset-m1 col s12 hide-on-med-and-up left-align">
                  <div className="col s12">
                    <h2>PNW OVERLAND</h2>
                    <p>PNW Overland is your interactive guide to backcountry road adventures in the
                    Pacific Northwest. All you need to explore our world-famous mountain
                    roads, with interactive maps, real dashcam videos and GIS information.</p>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://pnw-overland.herokuapp.com" target="_blank" rel="noopener noreferrer">DEMO</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/hannan-emily/pnw-overland" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-node-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-express-square50.png" alt="" />
                      <h6 className="logo-tiny">EJS &nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">POSTGRESQL&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">BCRYPT&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">ASYNC&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">GOOGLE MAPS API&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
              <img className="col m12 project-image responsive-img hide-on-small-only" src="./img/cover-pnw-overland.png" />
            </div>
          </div>



        <div className="row projects">
          <div className="col s12">
              <div className="offset-m1 col m3 project-text hide-on-small-only">
                <h2>MOOD TRACKER</h2>
                <p>Chart your mood by analysing your selfies! A responsive Python/Django app,
                we utilized the Amazon Facial Rekognition machine learning API, Charts.js
                and Materialize to generate tracking of each user’s mood by photos. I developed all
                front end components in Django & Materialize, built responsive image carousels
                linked to Python, and acted as GitMaster.</p>

                  <div className="col s6">
                    <a className='button btn' href="http://mood-tracker-1.us-west-2.elasticbeanstalk.com/" target="_blank" rel="noopener noreferrer">DEMO</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/hannan-emily/Mood-Tracker" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-python-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-django-square50.png" alt="" />
                      <h6 className="logo-tiny">AMAZON FACIAL REKOGNITION MACHINE LEARNING API &nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">CHARTS.JS&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">AWS DEPLOYED&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">JAVASCRIPT&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
                <img className="col s12 hide-on-med-and-up" src="./img/cover-moodtracker.png" />

                <div className="offset-m1 col s12 hide-on-med-and-up left-align">
                  <div className="col s12">
                    <h2>MOOD TRACKER</h2>
                    <p>Chart your mood by analysing your selfies! A responsive Python/Django app,
                    we utilized the Amazon Facial Rekognition machine learning API, Charts.js
                    and Materialize to generate tracking of each user’s mood by photos. I developed all
                    front end components in Django & Materialize, built responsive image carousels
                    linked to Python, and acted as GitMaster.</p>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="http://mood-tracker-1.us-west-2.elasticbeanstalk.com/" target="_blank" rel="noopener noreferrer">DEMO</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/hannan-emily/Mood-Tracker" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-python-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-django-square50.png" alt="" />
                      <h6 className="logo-tiny">AMAZON FACIAL REKOGNITION MACHINE LEARNING API &nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">CHARTS.JS&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">AWS DEPLOYED&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">JAVASCRIPT&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
              <img className="col m12 project-image responsive-img hide-on-small-only" src="./img/cover-moodtracker.png" />
            </div>
          </div>



          <div className="row projects">
            <div className="col s12">
                <div className="offset-m8 col m3 project-text hide-on-small-only">
                <h2>APOCALYPREP</h2>
                <p>A comprehensive, real time emergency prep and severe weather alert app.
                Built in React with Redux, we integrated the NOAA API, MongoDB master and
                user supply lists and user authentication. I built the MongoDB schema,
                Mongoose routing and all front end styling including implementing
                React-Materialize.</p>

                  <div className="col s6">
                    <a className='button btn' href="http://apocalyprep.herokuapp.com/" target="_blank" rel="noopener noreferrer">DEMO</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/vivian5668/apocalyprep" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-react-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-redux-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-mongo-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-mongoose-square50.png" alt="" />
                      <h6 className="logo-tiny">REACT-MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">NOAA API&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
                <img className="col s12 hide-on-med-and-up" src="./img/cover-apocalyprep.png" />

                <div className="offset-m1 col s12 hide-on-med-and-up left-align">
                  <div className="col s12">
                    <h2>APOCALYPREP</h2>
                    <p>A comprehensive, real time emergency prep and severe weather alert app.
                    Built in React with Redux, we integrated the NOAA API, MongoDB master and
                    user supply lists and user authentication. I built the MongoDB schema,
                    Mongoose routing and all front end styling including implementing
                    React-Materialize.</p>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="http://apocalyprep.herokuapp.com/" target="_blank" rel="noopener noreferrer">DEMO</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/vivian5668/apocalyprep" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-react-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-redux-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-mongo-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-mongoose-square50.png" alt="" />
                      <h6 className="logo-tiny">REACT-MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">NOAA API&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
              <img className="col m12 project-image responsive-img hide-on-small-only" src="./img/cover-apocalyprep.png" />
            </div>
          </div>


          <div className="row projects">
            <div className="col s12">
                <div className="offset-m1 col m3 project-text hide-on-small-only">
                  <h2>CHASING CARMEN SANDIEGO</h2>
                  <p>Chasing Carmen SanDiego is a delightful animated trivia game that pits you against that international thief, Carmen SanDiego.
                  Test your geographic knowledge in this two player HTML5 canvas game!</p>

                  <div className="col s6">
                    <a className='button btn' href="https://hannan-emily.github.io/ChasingCarmenSanDiego/" target="_blank" rel="noopener noreferrer">LIVE GAME</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/hannan-emily/ChasingCarmenSanDiego" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-jquery-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-js-square50.png" alt="" />
                      <h6 className="logo-tiny">HTML5 CANVAS&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>

                </div>

                <img className="col s12 hide-on-med-and-up" src="./img/cover-carmen.png" />

                <div className="offset-m1 col s12 hide-on-med-and-up left-align">
                  <div className="col s12">
                    <h2>CHASING CARMEN SANDIEGO</h2>
                    <p>Chasing Carmen SanDiego is a delightful animated trivia game that pits you against that international thief, Carmen SanDiego.
                    Test your geographic knowledge in this two player HTML5 canvas game!</p>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://hannan-emily.github.io/ChasingCarmenSanDiego/" target="_blank" rel="noopener noreferrer">LIVE GAME</a>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/hannan-emily/ChasingCarmenSanDiego" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-jquery-square50.png" alt="" />
                      <img className="logo-tiny" src="./img/logo-js-square50.png" alt="" />
                      <h6 className="logo-tiny">HTML5 CANVAS&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>

                </div>

              <img className="col m12 project-image responsive-img hide-on-small-only" src="./img/cover-carmen.png" />

            </div>
          </div>


          <div className="row projects">
            <div className="col s12">
                <div className="offset-m8 col m3 project-text hide-on-small-only">
                <h2>YOURS 2 SHARE</h2>
                <p>Winner: Best Overall App for WDI17/UXDI April Hackathon. Built in 8 hours,
                a hackathon project that paired developers with UX designers to make an app
                pertaining to food. Our app aims to connect food banks, volunteers,
                and regular people who want to donate unwanted food together. Food banks list
                their greatest needs, and, when a donator uploads a donation, our system sorts
                the request and alerts a volunteer driver to pickup & deliver their food donation.</p>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/kyleavb/hackathon" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-react-square50.png" alt="" />
                      <h6 className="logo-tiny">JAVASCRIPT&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
                <img className="col s12 hide-on-med-and-up" src="./img/cover-yours2share.png" />

                <div className="offset-m1 col s12 hide-on-med-and-up left-align">
                  <div className="col s12">
                    <h2>YOURS 2 SHARE</h2>
                    <p>Winner: Best Overall App for WDI17/UXDI April Hackathon. Built in 8 hours,
                    a hackathon project that paired developers with UX designers to make an app
                    pertaining to food. Our app aims to connect food banks, volunteers,
                    and regular people who want to donate unwanted food together. Food banks list
                    their greatest needs, and, when a donator uploads a donation, our system sorts
                    the request and alerts a volunteer driver to pickup & deliver their food donation.</p>
                  </div>

                  <div className="col s6">
                    <a className='button btn' href="https://github.com/kyleavb/hackathon" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </div>

                  <div className="col s12">
                    <div className='tech-used-parent'>
                      <h5 className='tech-used'>TECHNOLOGIES USED&nbsp;&nbsp;</h5>
                      <img className="logo-tiny" src="./img/logo-react-square50.png" alt="" />
                      <h6 className="logo-tiny">JAVASCRIPT&nbsp;&nbsp;&nbsp;</h6>
                      <h6 className="logo-tiny">MATERIALIZE&nbsp;&nbsp;&nbsp;</h6>
                    </div>
                  </div>
                </div>
              <img className="col m12 project-image responsive-img hide-on-small-only" src="./img/cover-yours2share.png" />
            </div>
          </div>

        </div>
      </Router>
    )
  }
}


export default Projects;
