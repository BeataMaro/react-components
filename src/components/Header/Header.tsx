import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>React</h1>
        <nav>
          <NavLink to="/about">About | </NavLink>
          <NavLink to="/form"> Register Form</NavLink>
        </nav>
      </div>
    );
  }
}
