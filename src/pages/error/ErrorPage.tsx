export const Error = () => {
  const clearStorage = () => localStorage.clear();
  return (
    <div>
      <h3>Something went wrong!</h3>
      <button onClick={clearStorage}>reload</button>
    </div>
  );
};
