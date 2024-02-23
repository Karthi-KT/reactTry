// import React from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import PropTypes from "prop-types";

const myProducts = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
const MyContext = createContext();
export default MyContext;

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={myProducts}>
    <App />
  </MyContext.Provider>
);
// myProducts.PropTypes = PropTypes.arrayOf(
//   PropTypes.shape({
//     category: PropTypes.string,
//     price: PropTypes.string,
//     stocked: PropTypes.bool,
//     name: PropTypes.string,
//   })
// );
