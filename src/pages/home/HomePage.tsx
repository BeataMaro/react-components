import { SearchBar } from '../../components/SearchBar/SearchBar';
import './HomePage.css';

import SearchResults from '../../components/SearchResults/SearchResults';

export const Home = () => {
  return (
    <>
      <SearchBar />
      <SearchResults />
    </>
  );
};
