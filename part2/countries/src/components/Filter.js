const Filter = ({ filterValue, handleFilterChange }) => {
  return (
    <form>
      <div>
        filter shown with
        <input value={filterValue} onChange={handleFilterChange} />
      </div>
    </form>
  );
};

export default Filter;
