import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs'
import './cart.css'

function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(item.price.substring(4)); // Remove the "KSh " prefix and convert to a number
      totalPrice += price * item.quantity;
    });
    return totalPrice.toFixed(2); // Round to 2 decimal places
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <div>
        <BsCart3 className='cart-icon'/>
          <p>Your cart is empty.</p>
          <button>
            <Link to="/">Go to Home Page</Link>
          </button>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - {item.price} - Quantity: {item.quantity}
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: KSh {calculateTotalPrice()}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
