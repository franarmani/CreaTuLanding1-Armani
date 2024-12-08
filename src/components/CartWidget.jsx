import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const cartItems = 3;

  return (
    <div className="cart-widget">
      <button className="cart-button">
        <FaShoppingCart className="cart-icon" />
        Carrito
        {cartItems > 0 && <span className="item-count">{cartItems}</span>}
      </button>
    </div>
  );
};

export default CartWidget;
