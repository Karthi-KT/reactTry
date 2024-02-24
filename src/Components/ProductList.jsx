import PropTypes from "prop-types";
// import ProductCategory from "./ProductCategory";
// import Products from "./Products";
import { useContext } from "react";
import MyContext from "../main";

const ProductList = ({ filterVal, inStock }) => {
  const rowValues = useContext(MyContext);
  const listItems = [];
  let lastCategory = null;
  rowValues.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterVal.toLowerCase()) === -1) {
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }
    if (product.name !== lastCategory) {
      listItems.push(() => {
        <tr key={product.category}>
          <th colSpan="2">{product.category}</th>
        </tr>;
      });
      lastCategory = product.category;
      // console.log(product.category);
    }

    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    listItems.push(
      <tr key={product.name}>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });
  // console.log(listItems);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>

      {/* <ProductCategory></ProductCategory>
      <Products></Products> */}
    </>
  );
};

ProductList.propTypes = {
  filterVal: PropTypes.string,
  inStock: PropTypes.bool,
};

export default ProductList;
