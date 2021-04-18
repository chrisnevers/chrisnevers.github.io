import React from 'react'
import '../pages/index.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div className="section col-xs-12 col-sm-12 col-md-4">
        <div className="about-me">
          <img alt="me" className="col-xs-12 col-sm-6 profile-pic" src="img/me.jpg" />
          <div className="col-xs-12 col-sm-6 info-text">
            <h1>Chris Nevers</h1>
            <figure className="section">
              <blockquote>
                <p>It is hard enough to remember my opinions, without also remembering my reasons for them!</p>
              </blockquote>
            </figure>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
