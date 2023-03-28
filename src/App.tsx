import { Component } from 'react';
import SearchBar from './components/searchBar';
import Header from './components/header';
import Card from './components/card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Card />
      </div>
    );
  }
}

export default App;
