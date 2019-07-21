import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-center sticky-top">
        <a className="navbar-brand nav-link" href="/">
          <h1>Chris Nevers</h1>
        </a>
        <div id="info" className="info">
          <a href="https://github.com/chrisnevers">
            <img alt="GitHub" src="img/github.svg" className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/christophernevers/">
            <img alt="LinkedIn" src="img/linkedin.png" className="icon"/>
          </a>
          <a href="https://www.instagram.com/chrisnevers/">
            <img alt="Instagram" src="img/instagram.png" className="icon"/>
          </a>
          <a href="img/resume.pdf">
            <img alt="Resume" src="img/resume.svg" className="icon"/>
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
