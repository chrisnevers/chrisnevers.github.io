import React from 'react';

export default (props) => {
	const { project } = props;
	return (
		<div className="row card">
			<div className="col-xs-12 col-sm-6">
				<h3 className="header">{project.title}</h3>
				<p className="text">{project.description}</p>
			</div>
			<div className="col-xs-12 col-sm-6 link-wrapper">
				<div className="img-wrapper">
					<img className="img" alt="lang-logo" src={project.img} />
				</div>
				<div className="links row">
					{project.links.map((link) => (
						<a key={link.href} className="col-xs-6 text" href={link.href}>
							{link.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
