import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Testing React with GH-Pages</h2>
        </div>
        <section className="Content-Container">
          <Content link="react-gh-pages-test/about" page="About" />
        </section>
      </div>
    );
  }
}