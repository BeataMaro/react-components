import { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { IAnimal } from '../../models/animals-model';
import Card from '../../components/Card/Card';
import './HomePage.css';

interface ICardsListing {
  cards: IAnimal[];
}

export default class Home extends Component {
  state: ICardsListing = {
    cards: [],
  };

  componentDidMount() {
    fetch('/data/animals.json')
      .then((res) => res.json() as Promise<IAnimal[]>)
      .then((cards) => {
        this.setState({ cards });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="cards-container">
          {this.state.cards.map(({ id, name, dato1, dato2, dato3, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              dato1={dato1}
              dato2={dato2}
              dato3={dato3}
              image={image}
            />
          ))}
        </div>
      </div>
    );
  }
}
