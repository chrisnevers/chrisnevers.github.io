import React from "react"

export default (props) => {
  const { project } = props;
  return (
    <div class="bg-light row card">
      <div className="col-xs-12 col-sm-6">
        <h3 className="header">{project.title}</h3>
        <p className="text">
          {project.description}
        </p>
      </div>
      <div className="col-xs-12 col-sm-6 link-wrapper">
        <div className="img-wrapper">
          <img className="img" src={project.img}/>
        </div>
        <div className="links row">
          {project.links.map(link => (
            <a
              className="col-xs-6 text"
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
