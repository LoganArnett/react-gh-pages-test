import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Content extends Component {
  render() {
    const content = this.props;
    return (
      <div className="Content">
        <h2><Link to={`${content.link}`}>Go to {content.page}</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor non illo, assumenda harum fuga autem alias odio magni blanditiis, pariatur est neque modi aspernatur dignissimos incidunt omnis eveniet iste, explicabo.</p>
      </div>
    );
  }
}