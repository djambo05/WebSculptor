import "./style.css";
import priceFormatter from "../../../Utils/priceFromatter";
const CartFooter = ({ total }) => {
  const { price, count } = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} шт</div>
      <div className="cart-footer__price">
        {priceFormatter.format(price)} руб.
      </div>
    </footer>
  );
};

export default CartFooter;
