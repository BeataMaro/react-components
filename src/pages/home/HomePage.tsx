import { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
import { Card } from '../../components/Card/Card';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import './HomePage.css';
import { IPhoto } from 'models/photo-model';

export const Home = () => {
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

  const api = createApi({
    accessKey: import.meta.env.VITE_ACCESS_KEY,
  });
  const [data, setPhotosResponse] = useState<IPhoto[]>([InitialPhotoState]);

  useEffect(() => {
    api.search
      .getPhotos({ query: 'cat', orientation: 'landscape' })
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
          setPhotosResponse(photoRes);
        }
        return photoRes;
      })
      .catch((e) => {
        console.log('something went wrong!');
        console.log(e);
      });
  }, [data]);

  if (data.length === 0) {
    return (
      <>
        <SearchBar />
        <div>Loading...</div>
      </>
    );
    // } else if (data.errors) {
    //   return (
    //     <div>
    //       <div>{data.errors[0]}</div>
    //       <div>PS: Make sure to set your access token!</div>
    //     </div>
    //   );
  } else {
    return (
      <>
        <SearchBar />
        <div className="cards-container">
          {data.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))}
        </div>
      </>
    );
  }
};
