import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


class Contact extends Component {
  render() {

    const buttonStyle = {
      border: '2px solid white ',
      color: 'white'
    };

    return (

      <Router>

        <div className='row technologies'>
          <a className="anchor" id="contact"></a>

          <div className="col s12 m8 offset-m2">
            <h4 className="h3-white">Get In Touch!</h4>
            <h5 className="h4-white">EMAIL&nbsp;EMILY:</h5>

            <div className="contact-text">
              <form action="https://formspree.io/emilyhannan@gmail.com" method="POST">
                <input type="text" name="name" placeholder="NAME"/>
                <input type="email" name="_replyto" placeholder="EMAIL" />
                <textarea name="message" placeholder="MESSAGE" />
                <input className="btn" style={buttonStyle} type="submit" value="Send" />
              </form>
            </div>

          </div>

        </div>

      </Router>


    )
  }
}

export default Contact;
