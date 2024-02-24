import PropTypes from "prop-types";
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
        onFilterValChange={setFilterVal}
        inStock={inStock}
        onInStockChange={setinStock}
      ></SearchBar>
      <ProductList filterVal={filterVal} inStock={inStock}></ProductList>
    </div>
  );
};

ProductTable.propTypes = {
  inStock: PropTypes.bool,
};

export default ProductTable;
