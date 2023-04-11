import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { Card } from '../Card/Card';
import { IPhoto } from 'models/photo-model';
import { Error } from '../../pages/error/ErrorPage';
import ClipLoader from 'react-spinners/ClipLoader';
import './SearchResults.css';

const InitialPhotoState: IPhoto = {
  id: '',
  urls: {
    full: '',
    regular: '',
    raw: '',
    small: '',
  },
  description: undefined,
  alt_description: undefined,
  user: {
    username: '',
    name: '',
    profile_image: {
      small: '',
    },
  },
  likes: 0,
  width: 0,
  height: 0,
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
          description: photo!.description || undefined,
          alt_description: photo!.alt_description || undefined,
          likes: photo!.likes,
          width: photo!.width,
          height: photo!.height,
        }));
        if (photoRes) {
          setResults(photoRes);
          setLoading(false);
        }
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
      {error && <Error />}
      {!error && !loading && (
        <div className="cards-container">
          {results.length ? (
            results.map((photo) => <Card key={photo.id} photo={photo} />)
          ) : (
            <p>0 results</p>
          )}
        </div>
      )}
    </>
  );
}
