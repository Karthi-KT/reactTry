import { useContext } from "react";
import MyContext from "../main";

const Products = () => {
  const rowValues = useContext(MyContext);

  const listItems = rowValues.map((item) => (
    <tr key={item.name}>
      <td style={{ color: item.stocked ? "green" : "red" }}>
        {item.name} - {item.price}
      </td>
    </tr>
  ));

  return (
    <>
      <table>
        <tbody>{listItems}</tbody>
      </table>
    </>
  );
};

export default Products;
