import { useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import CartProduct from "../CartProduct";

const cart = [
  {
    id: 1,
    img: "macbook.jpg",
    title: "Apple Mackbook Air 13",
    count: 1,
    price: 110000,
    priceTotal: 110000,
  },
  {
    id: 2,
    img: "apple-watch.jpg",
    title: "Apple Watch",
    count: 1,
    price: 29000,
    priceTotal: 29000,
  },
  {
    id: 3,
    img: "mac-pro.jpg",
    title: "Mac Pro",
    count: 1,
    price: 300000,
    priceTotal: 300000,
  },
];

const Cartmini = () => {
  const [data, setData] = useState(cart);
  const deleteProduct = (id) => {
    console.log(id);
    setData();
  };
  const products = cart.map((product) => {
    return (
      <CartProduct
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
      />
    );
  });
  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cartmini;
