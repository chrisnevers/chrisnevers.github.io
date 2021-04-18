import './index.scss';
import React from 'react';
import Projects from '../components/Projects';
import Music from '../components/Music';
import Container from '../components/Container';

const Index = () => {
		return (
			<Container>
				<div className="col-xs-12 col-sm-12 col-md-8">
					<div className="section">
						<div className="col-lg-12">
							<h1>About Me</h1>
						</div>
						<p className="about-me-text col-xs-12 col-sm-12 col-md-10">
							I am a software engineer at <a href="https://reach.sh/">Reach</a>.
							I am particularly interested in compilers
							and statically typed, functional programming languages. I graduated from UMass Lowell
							with a Bachelors in Computer Science. In my free time,
							I enjoy composing/playing music on guitar and piano. I'm really
							interested in harmony and writing cool non-diatonic progressions.
							I also like reading philosophy, horror & poetry, and spending time with my bunnies 🐰
						</p>
					</div>
					<Music />
					<Projects />
				</div>
			</Container>
		);
}

export default Index;
