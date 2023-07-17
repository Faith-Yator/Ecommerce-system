import React, { useContext } from 'react';

import './computer.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

// Manual product data
const products = [
  {
    id: 1,
    title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
    price: 'KSh 17,999',
    image: './computers/1 (1).jpg',
  },
  {
    id: 2,
    title: 'HP',
    price: 'KSh 16,999',
    image: './computers/1 (2).jpg',
  },
  {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (3).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (4).jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (5).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (7).jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (8).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (9).jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (20).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1.jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (10).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (11).jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (12).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (13).jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (14).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (15).jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (16).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (17).jpg',
    },
    {
      id: 1,
      title: 'DELL OptiPlex 790 SFF Intel Core I3 3.3GHz -4GB DDR3',
      price: 'KSh 17,999',
      image: './computers/1 (18).jpg',
    },
    {
      id: 2,
      title: 'HP',
      price: 'KSh 16,999',
      image: './computers/1 (19).jpg',
    },
];

function Computer() {
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
          <h1>Computers</h1>
          <div className="computer">
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
    
    export default Computer;