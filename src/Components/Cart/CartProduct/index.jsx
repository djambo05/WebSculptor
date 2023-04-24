import CartCount from "../CartCount";
import "./style.css";
import priceFormatter from "../../../Utils/priceFromatter";
const CartProduct = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) => {
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${product.img}`} alt={product.title} />
      </div>
      <div className="product__title">{product.title}</div>
      <div className="product__count">
        <CartCount
          count={product.count}
          increase={increase}
          id={product.id}
          decrease={decrease}
          changeValue={changeValue}
        />
      </div>
      <div className="product__price">
        {priceFormatter.format(product.priceTotal)} руб.
      </div>
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
