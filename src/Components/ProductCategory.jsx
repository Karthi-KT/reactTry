// import PropTypes from 'prop-types'
import { useContext } from "react";
import MyContext from "../main";

const ProductCategory = (category) => {
  const topic = useContext(MyContext);
  if (category !== null) {
    return (
      <>
        <table>
          <tr>
            <th colSpan={"2"} key={{ category }}>
              {topic.category}
            </th>
          </tr>
          <h1></h1>
        </table>
      </>
    );
  } else return null;
};

ProductCategory.propTypes = {};

export default ProductCategory;
