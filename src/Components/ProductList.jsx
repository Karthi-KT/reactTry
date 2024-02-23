// import PropTypes from 'prop-types'

import ProductCategory from "./ProductCategory";
import Products from "./Products";

const ProductList = (myProducts, filterVal, inStock) => {
  return (
    <>
      <ProductCategory
        category={myProducts.category}
        key={myProducts.category}
      ></ProductCategory>
      <Products></Products>
    </>
  );
};

ProductList.propTypes = {};

export default ProductList;
