import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class header extends Component {
  render() {
    return (
      <div>
        <h1>React components task</h1>
        <nav>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    );
  }
}
