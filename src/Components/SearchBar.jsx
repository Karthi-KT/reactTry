// import PropTypes from "prop-types";
import "../style.css";
import MyContext from "../main";

const SearchBar = ({
  onFilterVal,
  inStock,
  onFilterValChange,
  onInStockChange,
}) => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onFilterValChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          onChange={(e) => onInStockChange(e.target.value)}
        />
        Show Only the items in stock
      </label>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
