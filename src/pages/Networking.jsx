import React from 'react'
import './networking.css'
import { useNavigate } from 'react-router-dom';

function Networking() {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(page);
  };
  return (
    <div>
           
    <h1>Networking devices</h1>
    <div className='networking'>
       
        <div className="card">
      <img src=".\src\network\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\src\network\1 (2).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\src\network\1 (6).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (3).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (4).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      
      <div className="card">
      <img src=".\src\network\1 (5).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (6).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (7).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (3).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (2).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (4).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (3).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (5).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (7).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (6).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (2).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\network\1 (7).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
  
      </div>
      
    </div>
  )
}

export default Networking
