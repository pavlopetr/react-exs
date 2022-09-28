import './Cart.css'


const Cart = () => {
    return(<div>
        <ul class="cart-products">
        <li class="cart-product">
        <img
        class="cart-image"
        src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
        alt=""
        />
        <div class="cart-descr">
          <h3 class="cart-model">ZTE RedMagic</h3>
          <span class="cart-price">11999</span>
          <span class="cart-currency">UAH</span>
        </div>
        <button class="cart-btn-remove" type="button">Удалить</button>
      </li>
      <li class="cart-product">
        <img
        class="cart-image"
        src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
        alt=""
        />
        <div class="cart-descr">
          <h3 class="cart-model">ZTE RedMagic</h3>
          <span class="cart-price">11999</span>
          <span class="cart-currency">UAH</span>
        </div>
        <button class="cart-btn-remove" type="button">Удалить</button>
      </li>
    </ul>
    </div>)
};

export default Cart;