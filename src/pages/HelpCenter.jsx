import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './helpcenter.css';

function HelpCenter() {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(page);
  };

  return (
    <div>
      <div className='help'>
        <h1> Digistic-Enterprise Help Center</h1>
        <p>How can we help you?</p>
      </div>
      <div className='helpsearch'>
        <input
          type='text'
          placeholder='Describe your issue...'
          className='search-input'
        />
        <button className='search-btn'>
          <BiSearch />
        </button>
      </div>
      <div className='card1'>
        <div className='card' onClick={() => handleCardClick('/PlaceOrder')}>
          <img src='.\src\help\placement.png' alt='Card' className='card-image' />
          <p>Order Placement</p>
        </div>
        <div className='card' onClick={() => handleCardClick('/deliverypage')}>
          <img src='.\src\help\delivery.png' alt='Card' className='card-image' />
          <p>Delivery</p>
        </div>
        <div className='card' onClick={() => handleCardClick('/OrderCancellation')}>
          <img src='.\src\help\cancellation.png' alt='Card' className='card-image' />
          <p>Cancellation</p>
        </div>
        <div className='card' onClick={() => handleCardClick('/payment')}>
          <img src='.\src\help\others.png' alt='Card' className='card-image' />
          <p>Payment, Account related and others</p>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
