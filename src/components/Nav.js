import React from 'react';


const Nav = props => {
  //console.log(props)

    return (
      <div>
        <nav>
          <div className="nav-wrapper nav">
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul className="left hide-on-med-and-down">
                <li><a href="/">HOME</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#technologies">TECH</a></li>
                <li><a href="./img/resume-hannan.pdf" target="_blank" rel="noopener noreferrer">RESUME</a></li>
                <li><a href="#about">ABOUT</a></li>
              </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="/">HOME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#technologies">TECH</a></li>
          <li><a href="./img/resume-hannan.pdf" target="_blank" rel="noopener noreferrer">RESUME</a></li>
          <li><a href="#about">ABOUT</a></li>
        </ul>
      </div>
    )
}

export default Nav;
