import { ChangeEvent, FormEvent, useState } from 'react';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateInputValue } from '../../services/searchKeywordSlice';
import { RootState } from 'store/store';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.searchKeyword.inputValue);

  const [inputVal, setInputVal] = useState<string>(inputValue || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateInputValue(inputVal));
  };

  return (
    <form onSubmit={(e) => handleSearchSubmit(e)} data-testid="search">
      <input type="text" value={inputVal} onChange={(e) => handleChange(e)} placeholder="Search" />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};
