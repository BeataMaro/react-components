import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { IAnimal } from 'models/animals-model';
import './HomePage.css';

export const HomePage = () => {
  const [cards, setCards] = useState([] as IAnimal[]);

  useEffect(() => {
    fetch('/data/animals.json')
      .then((res) => res.json() as Promise<IAnimal[]>)
      .then((cards) => {
        setCards(cards);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="cards-container">
        {cards.map(({ id, name, dato1, dato2, dato3, image }) => (
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
};
