describe('Save search query from input to store', () => {
  test('gets query store', () => {
    const query = 'Tiger';
    localStorage.setItem('searchQuery', query);
    expect(localStorage.getItem('searchQuery')).toEqual('Tiger');
  });
});
