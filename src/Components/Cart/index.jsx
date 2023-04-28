import "./_base.css";
import "./_reset.css";
import "./_vars.css";
import "./_section_cart.css";
import Title from "./Title";
import Cartmini from "./Cartmini";

const Cart = ({ purchases }) => {
  return (
    <section className="section-cart">
      <header className="section-cart__header">
        <div className="container">
          <Title />
        </div>
      </header>
      <div className="section-cart__body">
        <div className="container">
          <Cartmini purchases={purchases} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
