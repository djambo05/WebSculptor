import CartCount from "../CartCount";
import "./style.css";
const CartProduct = ({ product, deleteProduct }) => {
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${product.img}`} alt={product.title} />
      </div>
      <div className="product__title">{product.title}</div>
      <div className="product__count">
        <CartCount />
      </div>
      <div className="product__price">{product.price} руб.</div>
      <div className="product__controls">
        <button
          type="button"
          onClick={() => {
            deleteProduct(product.id);
          }}
        >
          <img src="./img/icons/cross.svg" alt="Delete" />
        </button>
      </div>
    </section>
  );
};

export default CartProduct;
