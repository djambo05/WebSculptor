import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainPaper from "./Components/MainPaper";
// import MainFooter from "./Components/MainFooter";
import AppleCard from "./Components/AppleCard";

const data = [
  {
    id: 1,
    img: "macbook.jpg",
    title: "Apple Mackbook Air 13",
    count: 1,
    price: 110000,
  },
  {
    id: 2,
    img: "apple-watch.jpg",
    title: "Apple Watch 2",
    count: 1,
    price: 29000,
  },
  {
    id: 3,
    img: "mac-pro.jpg",
    title: "Mac Pro",
    count: 1,
    price: 300000,
  },
  {
    id: 4,
    img: "mac-pro.jpg",
    title: "Mac Pro",
    count: 1,
    price: 300000,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((cart) => {
      console.log(cart);
      return cart.length === 0
        ? [item]
        : cart.map((product) => {
            if (item.id !== product.id) {
              return [...cartItems, item];
            }
            return cartItems;
          });
    });
  };

  const myContext = React.createContext();

  return (
    <>
      <Header purchases={cartItems} />
      <MainPaper />
      <AppleCard products={data} addToCart={addToCart} />
      {/* <MainFooter /> */}
    </>
  );
}

export default App;
