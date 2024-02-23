// import PropTypes from "prop-types";
import { useState } from "react";

import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const ProductTable = () => {
  const [filterVal, setFilterVal] = useState("");
  const [inStock, setinStock] = useState(false);
  return (
    <div>
      <SearchBar
        filterVal={filterVal}
        inStock={inStock}
        onFilterValChange={setFilterVal}
        onInStockChange={setinStock}
      ></SearchBar>
      <ProductList
        filterVal={filterVal}
        inStock={inStock}
        onFilterValChange={setFilterVal}
        onInStockChange={setinStock}
      ></ProductList>
    </div>
  );
};

ProductTable.propTypes = {};

export default ProductTable;
