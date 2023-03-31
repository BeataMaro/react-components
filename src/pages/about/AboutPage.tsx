import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>About Us</h2>
        <Link to="/">Back to main page</Link>
      </div>
    );
  }
}
