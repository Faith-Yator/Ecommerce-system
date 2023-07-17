import React, { useContext } from 'react';

import './homeappliances.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

// Manual product data
const products = [
    {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 16,399',
        image: './home/1 (1).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 28,399',
        image: './home/1 (2).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (4).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 19,399',
        image: './home/1 (6).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 20,399',
        image: './home/1 (5).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (8).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 19,999',
        image: './home/1 (7).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (8).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (3).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (2).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 38,399',
        image: './home/1 (4).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 48,399',
        image: './home/1 (3).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 47399',
        image: './home/1 (8).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (3).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (2).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (8).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 17,399',
        image: './home/1 (6).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 18,399',
        image: './home/1 (1).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 25,399',
        image: './home/1 (6).jpg'
      },
      {
        id: 1,
        title: 'Refrigerator',
        price: 'KSh 22,399',
        image: './home/1 (4).jpg',
      },
];

function Homeappliaces() {
      const navigate = useNavigate();
      const { addToCart } = useContext(CartContext);
    
      const handleCardClick = (page) => {
        navigate(page);
      };
    
      const handleAddToCart = (product) => {
        addToCart(product);
      };
    
      return (
        <div>
          <h1>Refridgerators</h1>
          <div className="homeappliances">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt="Card" className="card-image" />
                <p>{product.title}</p>
                <h3>{product.price}</h3>
                <button
                  className="card-button"
                  onClick={() => {
                    handleAddToCart(product);
                    handleCardClick('');
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Homeappliaces;