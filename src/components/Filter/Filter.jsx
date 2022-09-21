const Filter = () => {
  return (
    <ul className="filter">
      <li className="filter-item">
        <label className="filter-label" htmlFor="apple">
          Apple
        </label>
        <input
          className="filter-input"
          name="filter"
          value="apple"
          type="checkbox"
          id="apple"
        />
      </li>
      <li className="filter-item">
        <label className="filter-label" htmlFor="xiaomi">
          Xiaomi
        </label>
        <input
          className="filter-input"
          name="filter"
          value="xiaomi"
          type="checkbox"
          id="xiaomi"
        />
      </li>
    </ul>
  );
};

export default Filter;
