import { useEffect, useState } from 'react';
import { IPhoto } from 'models/photo-model';

import './Card.css';

// interface CardState {
//   searchQuery: string;
// }

export const Card: React.FC<{ photo: IPhoto }> = ({ photo }) => {
  const { user, urls } = photo;

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(localStorage.getItem('searchQuery') || '');
  }, []);

  return (
    <div className="card">
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        rel="noreferrer"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </div>
  );
};
