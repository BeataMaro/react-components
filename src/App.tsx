import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
