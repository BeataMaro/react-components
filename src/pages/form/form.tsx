import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class form extends Component {
  render() {
    return (
      <div>
        <h2>Register Form</h2>
        <Link to="/">Back to main page</Link>
      </div>
    );
  }
}
