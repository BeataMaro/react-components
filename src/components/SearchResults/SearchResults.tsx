import { Card } from '../Card/Card';
import { IPhoto } from 'models/photo-model';
import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import ClipLoader from 'react-spinners/ClipLoader';

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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const api = createApi({
    accessKey: import.meta.env.VITE_ACCESS_KEY,
  });

  useEffect(() => {
    api.search
      .getPhotos({ query: searchQuery, orientation: 'landscape', perPage: 12 })
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
          setLoading(false);
        }
        // return photoRes;
      })
      .catch(() => {
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <>
      {loading && (
        <ClipLoader
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {error && (
        <div>
          <div>Something went wrong, please try again!</div>
        </div>
      )}
      <div className="cards-container">
        {results.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
}
