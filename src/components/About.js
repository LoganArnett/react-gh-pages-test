import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/About.css';
import Content from './Content';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-header">
          <img src={logo} className="About-logo" alt="logo" />
          <h2>About Route</h2>
        </div>
        <section className="Content-Container">
          <Content link="react-gh-pages-test/" page="Home" />
        </section>
      </div>
    );
  }
}