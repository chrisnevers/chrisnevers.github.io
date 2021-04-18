import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

class Container extends React.Component {
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
        <div className="row">
          <Navbar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Container;
