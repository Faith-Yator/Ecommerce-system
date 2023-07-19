import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import './cart.css';

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
        <div className='cart'>
          <BsCart3 className='cart-icon' />
          <p>Your cart is empty.</p>
          <button>
            <Link to="/">Go to Home Page</Link>
          </button>
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    {item.title}
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total Price: KSh {calculateTotalPrice()}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
          <Link to="/payment">
            <button>Proceed to Payment</button>
          </Link>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
