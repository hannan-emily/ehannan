import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Technologies extends Component {
  render() {
    return (
      <Router>
        <div className="row technologies">
        <a className="anchor" id="technologies"></a>

          <div className="col s12 technologies-header">
            <h2 className='h2-white'>TECHNOLOGIES</h2>
          </div>

          <div className="col s12">
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-mongo-square.png" alt="Logo:Mongo" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-redux-square.png" alt="Logo:Redux" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-python-square.png" alt="Logo:Python" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-node-square.png" alt="Logo:Node" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-jquery-square.png" alt="Logo:Jquery" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-html5-square.png" alt="Logo:HTML5" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-mongoose-square.png" alt="Logo:Mongoose" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-react-square.png" alt="Logo:React" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-django-square.png" alt="Logo:Django" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-express-square.png" alt="Logo:Express" />
              </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-js-square.png" alt="Logo:JS" />
            </div>
            <div className="col s4 m2">
              <img className="logo" src="./img/logo-css-square.png" alt="Logo:CSS" />
            </div>
          </div>

        </div>
      </Router>
    )
  }
}

export default Technologies;
