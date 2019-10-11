import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import React from "react"
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Music from '../components/Music'
import { Helmet } from 'react-helmet'

class Index extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Chris Nevers : Software Engineer"/>
          <title>Chris Nevers</title>
          <link rel="canonical" href="https://chrisnevers.github.io/" />
        </Helmet>
        <Navbar />
        <div className="section about-me row col-xs-12">
          <img
            alt="me"
            className="col-xs-12 col-sm-6 profile-pic"
            src="img/me.jpg"
          />
          <div className="col-xs-12 col-sm-6 about-me-text">
            <h1>About Me</h1>
            <p>
              I am a software engineer at Curriculum Associates. I am particularly
              interested in compilers and programming languages.
              In my free time, I enjoy composing/playing music and reading
              Nietzsche!
            </p>
          </div>
        </div>
        <Music />
        <Projects />
      </div>
    )
  }
}

export default Index
