import { useState, useEffect } from 'react';

export const SearchBar = () => {
  const query = localStorage.getItem('searchQuery') || '';
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    localStorage.setItem('searchQuery', searchQuery);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearchSubmit} data-testid="search">
      <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search" />
      <button type="submit">Search</button>
    </form>
  );
};
