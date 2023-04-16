import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { IPhoto } from 'models/photo-model';
import { Error } from '../../pages/error/ErrorPage';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetPhotoByKeywordQuery } from '../../services/api/apiSlice';
import './SearchResults.css';

export const InitialPhotoState: IPhoto = {
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

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { data } = useGetPhotoByKeywordQuery(searchQuery);

  useEffect(() => {
    if (data) {
      setError(false);
      setLoading(false);
    }
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
          {data ? (
            data?.results!.map((photo) => <Card key={photo.id} photo={photo} />)
          ) : (
            <p>0 results. Please, try to search for another word.</p>
          )}
        </div>
      )}
    </>
  );
}
