import { ChangeEvent, FormEvent, useEffect } from 'react';

export const SearchBar = (props: {
  searchQuery: string;
  setSearchQuery: (newState: string) => void;
}) => {
  const { searchQuery, setSearchQuery } = props;

  let search = '';

  useEffect(() => {
    JSON.stringify(localStorage.setItem('searchQuery', searchQuery)) || '';
  }, [searchQuery]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    search = event.target.value;
    localStorage.setItem('searchQuery', search);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(search);
    localStorage.setItem('searchQuery', search);
  };

  return (
    <form onSubmit={handleSearchSubmit} data-testid="search">
      <input type="text" onChange={handleChange} placeholder="Search" />
      <button type="submit">Search</button>
    </form>
  );
};
