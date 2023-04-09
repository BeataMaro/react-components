import { Card } from '../Card/Card';
import { IPhoto } from 'models/photo-model';
import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

const InitialPhotoState: IPhoto = {
  id: '',
  urls: {
    full: '',
    regular: '',
    raw: '',
    small: '',
  },
  user: {
    username: 'Adelajda',
    name: 'Aldona',
  },
  // errors: ''
};

export default function SearchResults(props: { searchQuery: string }) {
  const { searchQuery } = props;
  const [results, setResults] = useState<IPhoto[]>([InitialPhotoState]);

  const api = createApi({
    accessKey: import.meta.env.VITE_ACCESS_KEY,
  });

  useEffect(() => {
    api.search
      .getPhotos({ query: searchQuery, orientation: 'landscape' })
      .then((res) => res.response?.results)
      .then((res) => {
        const photoRes = res?.map((photo) => ({
          id: photo.id,
          urls: {
            full: photo!.urls.full,
            small: photo!.urls.small,
            regular: photo!.urls.regular,
            raw: photo!.urls.raw,
          },
          user: photo!.user,
        }));
        if (photoRes) {
          setResults(photoRes);
        }
        return photoRes;
      })
      .catch((e) => {
        console.log('something went wrong!');
        console.log(e);
      });
  }, [searchQuery, api.search]);

  if (results.length === 0) {
    return <p>Progressing...</p>;
  } // } else if (data.errors) {
  //   return (
  //     <div>
  //       <div>{data.errors[0]}</div>
  //       <div>PS: Make sure to set your access token!</div>
  //     </div>
  //   );
  else {
    return (
      <div className="cards-container">
        {results.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}
