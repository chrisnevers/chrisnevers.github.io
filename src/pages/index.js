import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Music from '../components/Music';
import { Helmet } from 'react-helmet';

class Index extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Helmet>
					<meta charSet="utf-8" />
					<meta name="description" content="Chris Nevers : Software Engineer" />
					<title>Chris Nevers</title>
					<link rel="canonical" href="https://chrisnevers.github.io/" />
					<link rel="preconnect" href="https://fonts.gstatic.com"/>
					<link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap" rel="stylesheet"/>
				</Helmet>
				{/* <Navbar /> */}
				<div className="row">
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
					<div className="col-xs-12 col-sm-12 col-md-8">
						<div className="section">
							<div className="col-lg-12">
								<h1>About Me</h1>
							</div>
							<p className="about-me-text col-xs-12 col-sm-12 col-md-10">
								I am a software engineer at <a href="https://reach.sh/">Reach</a>.
								I am particularly interested in compilers
								and programming languages. I graduated from UMass Lowell
								with a Bachelors in Computer Science. In my free time,
								I enjoy composing/playing music on guitar and piano, reading
								philosophy and poetry, and spending time with my bunny 🐰
							</p>
						</div>
						<Music />
						<Projects />
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
