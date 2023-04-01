import { Component } from 'react';

interface SearchBarState {
  searchQuery: string;
}

class SearchBar extends Component<object, SearchBarState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') || '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.searchQuery);
  }

  handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchQuery = event.target.value;
    localStorage.setItem('searchQuery', searchQuery);
    this.setState({ searchQuery });
  }

  handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      searchQuery: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit} data-testid="search">
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
