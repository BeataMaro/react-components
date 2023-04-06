describe('Save search query from input to localstorage', () => {
  test('gets query from LocalStorage', () => {
    const query = 'Tiger';
    localStorage.setItem('searchQuery', query);
    expect(localStorage.getItem('searchQuery')).toEqual('Tiger');
  });
});
