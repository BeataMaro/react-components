import { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://source.unsplash.com/random" alt="random image from unsplash.com" />
        <h3></h3>
      </div>
    );
  }
}
