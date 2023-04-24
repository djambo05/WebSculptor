import { useEffect, useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import CartProduct from "../CartProduct";

const data = [
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
  const [cart, setCart] = useState(data);
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
    count: cart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
      count: cart.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  }, [cart]);
  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (id === product.id) {
          const newCount = product.count++;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (id === product.id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <CartProduct
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};

export default Cartmini;
