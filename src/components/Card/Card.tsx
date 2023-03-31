import { IAnimal } from 'models/animals-model';
import { Component } from 'react';
import './Card.css';

interface CardState {
  searchQuery: string;
}

export default class Card extends Component<IAnimal, CardState> {
  constructor(props: IAnimal) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') || '',
    };
  }
  render() {
    const { name, dato1, dato2, dato3, image } = this.props;
    return (
      <div className="card">
        <img src={image} alt="random image from unsplash.com" />
        <h3>{this.state.searchQuery}</h3>
        <h2>{name}</h2>
        <p>{dato1}</p>
        <span>{dato2}</span>
        <i>{dato3}</i>
      </div>
    );
  }
}
