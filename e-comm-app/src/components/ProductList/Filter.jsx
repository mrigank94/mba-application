import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="sidebar-search form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name...."
        />
      </div>

      <div className="price-filter">
        <div className="price-filter-select">
          <div className="form-group">
            Min Price
            <select className="form-select" onChange={() => {}}>
              <option value="1000">1000</option>
              <option value="1000">2000</option>
              <option value="1000">5000</option>
              <option value="1000">10000</option>
              <option value="1000">20000</option>
              <option value="1000">50000</option>
            </select>
          </div>
          <div className="form-group">
            Max Price
            <select className="form-select" onChange={() => {}}>
              <option value="1000">2000</option>
              <option value="1000">5000</option>
              <option value="1000">10000</option>
              <option value="1000">20000</option>
              <option value="1000">50000</option>
              <option value="1000">100000</option>
            </select>
          </div>
          <div className="btn btn-primary clear-filter">Clear all filters</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
