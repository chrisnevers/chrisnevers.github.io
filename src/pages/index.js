import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import React from "react"
import Navbar from './Navbar'
import Projects from './Projects'

class Index extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="section about-me row col-xs-12 col-sm-8">
          <img
            alt="me"
            className="col-xs-12 col-sm-6 profile-pic"
            src="img/me.jpg"
          />
          <div className="col-xs-12 col-sm-6">
            <h1>About Me</h1>
            <p>
              I am a software engineer at Curriculum Associates. I am particularly
              interested in compilers and programming languages.
              In my free time, I enjoy composing/playing music and reading
              Nietzsche!
            </p>
          </div>
        </div>
        <Projects />
      </div>
    )
  }
}

export default Index
