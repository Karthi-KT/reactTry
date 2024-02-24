import PropTypes from "prop-types";
import "../style.css";
// import MyContext from "../main";

const SearchBar = ({
  filterVal,
  inStock,
  onFilterValChange,
  onInStockChange,
}) => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={filterVal}
        onChange={(e) => onFilterValChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        Show Only the items in stock
      </label>
    </div>
  );
};

SearchBar.propTypes = {
  filterVal: PropTypes.string,
  inStock: PropTypes.bool,
  onFilterValChange: PropTypes.func,
  onInStockChange: PropTypes.func,
};

export default SearchBar;
