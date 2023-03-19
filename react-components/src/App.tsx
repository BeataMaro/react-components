import { Component } from 'react';
import SearchBar from './components/searchBar';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
