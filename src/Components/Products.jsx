import { useContext } from "react";
import MyContext from "../main";

const Products = () => {
  const rowValues = useContext(MyContext);

  const listItems = rowValues.map((item) => (
    <tr key={item.name}>
      <td style={{ color: item.stocked ? "green" : "red" }}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>{}</tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </>
  );
};

export default Products;
