import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import './Cart.css';
import { CartContext } from './Context/CartContext.jsx';

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleIncrease = (item) => {
    dispatch({ type: 'INCREASE', payload: item });
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: 'DECREASE', payload: item });
    } else {
      dispatch({ type: 'REMOVE', payload: item });
    }
  };

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE', payload: item });
  };

  return (
    <div className='main-cart'>
      {state.length === 0 ? (
        <div className='cart-content1'>
          <BsCart3 className='cart-icon' />
          <br />
          <br />
          <div className='cart-content2'>
            <h1>Your Cart Is Empty!!</h1>
            <pre>Browse our categories and discover our best and most affordable deals</pre>
            <br />
            <br />
            <button className='cart-btn'>
              <Link to='/'>Continue Shopping</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className='cart-items-container'>
          <h2>Cart Items:</h2>
          {state.map((item, index) => (
            <div className='cart-item' key={index}>
              <div className='cart-item-image'>
                <img src={item.image} alt={`Item ${item.id}`} />
              </div>
              <div className='cart-item-details'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Price: Ksh{item.price}</p>
                <div className='quantity'>
                  <button onClick={() => handleIncrease(item)}>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleDecrease(item)}>-</button>
                </div>
                <IoMdTrash onClick={() => handleRemove(item)} />
              </div>
            </div>
          ))}
          <div className='total'>
            <h2>Total: Ksh{total}</h2>
            <button>Checkout: Ksh{total}</button>
          </div>
          <button className='cart-btn'>
            <Link to='/'>Continue Shopping</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
