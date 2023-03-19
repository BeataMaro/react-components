import { Component } from 'react';

interface CardState {
  searchQuery: string;
}

export default class Card extends Component<object, CardState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') || '',
    };
  }
  render() {
    return (
      <div className="card">
        <img src="https://source.unsplash.com/random" alt="random image from unsplash.com" />
        <h3>{this.state.searchQuery}</h3>
      </div>
    );
  }
}
