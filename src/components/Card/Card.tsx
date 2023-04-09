import { IPhoto } from 'models/photo-model';

import './Card.css';

export const Card: React.FC<{ photo: IPhoto }> = ({ photo }) => {
  const { user, urls } = photo;

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
