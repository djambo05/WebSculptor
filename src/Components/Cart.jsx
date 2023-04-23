import './Style/_base.css'
import './Style/_reset.css'
import './Style/_vars.css'

const Cart = () => {
    return (
        <section className="section-cart">
        <header className="section-cart__header">
            <div className="container">
                <h1 className="title-1">Корзина товаров</h1>
            </div>
        </header>
        <div className="section-cart__body">
            <div className="container">

                <section className="cart">
                    <header className="cart-header">
                        <div className="cart-header__title">наименование</div>
                        <div className="cart-header__count">количество</div>
                        <div className="cart-header__cost">стоимость</div>
                    </header>

                    <section className="product">
                        <div className="product__img"><img src="./img/products/macbook.jpg" alt="Apple MacBook Air 13"/></div>
                        <div className="product__title">Apple MacBook Air 13</div>
                        <div className="product__count">
                            <div className="count">
                                <div className="count__box">
                                    <input type="number" className="count__input" min="1" max="100" value="1"/>
                                </div>
                                <div className="count__controls">
                                    <button type="button" className="count__up">
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button type="button" className="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product__price">110 000 руб.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </section>

                    <section className="product">
                        <div className="product__img"><img src="./img/products/apple-watch.jpg" alt="Apple watch"/></div>
                        <div className="product__title">Apple watch</div>
                        <div className="product__count">
                            <div className="count">
                                <div className="count__box">
                                    <input type="number" className="count__input" min="1" max="100" value="1"/>
                                </div>
                                <div className="count__controls">
                                    <button type="button" className="count__up">
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button type="button" className="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product__price">29 000 руб.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </section>

                    <section className="product">
                        <div className="product__img"><img src="./img/products/mac-pro.jpg" alt="Mac Pro"/></div>
                        <div className="product__title">Mac Pro</div>
                        <div className="product__count">
                            <div className="count">
                                <div className="count__box">
                                    <input type="number" className="count__input" min="1" max="100" value="1"/>
                                </div>
                                <div className="count__controls">
                                    <button type="button" className="count__up">
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button type="button" className="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product__price">190 000 руб.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </section>


                    <footer className="cart-footer">
                        <div className="cart-footer__count">3 единицы</div>
                        <div className="cart-footer__price">329 000 руб.</div>
                    </footer>
                </section>

            </div>
            </div>
            </section>
    
    )
}

export default Cart