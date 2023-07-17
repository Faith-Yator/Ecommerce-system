import React, { useContext } from 'react';

import './homeappliances.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

// Manual product data
const products = [
    {
        id: 1,
        title: 'XIAOMI',
        price: 'KSh 22,399',
        image: './phone/1 (1).jpg',
      },
      {
        id: 1,
        title: 'Techno Spark',
        price: 'KSh 22,399',
        image: './phone/1 (2).jpg',
      },
      {
        id: 1,
        title: 'XIAOMI',
        price: 'KSh 22,399',
        image: './phone/1 (3).jpg',
      },
      {
        id: 1,
        title: 'OPPO',
        price: 'KSh 22,399',
        image: './phone/1 (4).jpg',
      },
      {
        id: 1,
        title: 'XIAOMI',
        price: 'KSh 22,399',
        image: './phone/1 (5).jpg',
      },
      {
        id: 1,
        title: 'XIAOMI',
        price: 'KSh 22,399',
        image: './phone/1 (19).jpg',
      },
      {
        id: 1,
        title: 'Tecno',
        price: 'KSh 22,399',
        image: './phone/1 (6).jpg',
      },
      {
        id: 1,
        title: 'Sumsang',
        price: 'KSh 22,399',
        image: './phone/1 (7).jpg',
      },
      {
        id: 1,
        title: 'XIAOMI',
        price: 'KSh 22,399',
        image: './phone/1 (8).jpg',
      },
      {
        id: 1,
        title: 'Tecno Spark',
        price: 'KSh 22,399',
        image: './phone/1 (9).jpg',
      },
      {
        id: 1,
        title: 'XIAOMI',
        price: 'KSh 22,399',
        image: './phone/1 (10).jpg',
      },
      {
        id: 1,
        title: 'Tecno',
        price: 'KSh 22,399',
        image: './phone/1 (11).jpg',
      },
      {
        id: 1,
        title: 'Nokia',
        price: 'KSh 22,399',
        image: './phone/1 (12).jpg',
      },
      {
        id: 1,
        title: 'XIAOMI',
        price: 'KSh 22,399',
        image: './phone/1 (13).jpg',
      },
      {
        id: 1,
        title: 'Itel',
        price: 'KSh 22,399',
        image: './phone/1 (14).jpg',
      },
      {
        id: 1,
        title: 'Generic Tablet',
        price: 'KSh 22,399',
        image: './phone/1 (15).jpg',
      },
      {
        id: 1,
        title: 'Generic Tablet',
        price: 'KSh 22,399',
        image: './phone/1 (16).jpg',
      },
      {
        id: 1,
        title: 'Generic Tablet',
        price: 'KSh 22,399',
        image: './phone/1 (17).jpg',
      },
      {
        id: 1,
        title: 'Generic Tablet',
        price: 'KSh 22,399',
        image: './phone/1 (18).jpg',
      },
      {
        id: 1,
        title: 'Generic Tablet',
        price: 'KSh 22,399',
        image: './phone/1 (19).jpg',
      },
];

function SmartPhones() {
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
          <h1>SmartPhone & Tables</h1>
          <div className="smartphone">
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
    
    export default SmartPhones;