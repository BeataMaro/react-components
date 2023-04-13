import { SearchBar } from '../../components/SearchBar/SearchBar';
import './HomePage.css';

import SearchResults from '../../components/SearchResults/SearchResults';
import { useState } from 'react';

export const Home = () => {
  const query = JSON.stringify(localStorage.getItem('searchQuery')) || '';
  const [searchQuery, setSearchQuery] = useState(query);

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </>
  );
};
