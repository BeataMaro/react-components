import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { IAnimal } from 'models/animals-model';
import './HomePage.css';

export const Home = () => {
  const [cards, setCards] = useState([] as IAnimal[]);
  const API = '/data/animals.json';

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const results = await response.json();
        setCards(results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(API);
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
