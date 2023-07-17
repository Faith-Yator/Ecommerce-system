import React from 'react'
import './homeappliances.css' 
import { useNavigate } from 'react-router-dom';

function Homeappliances() {

  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(page);
  };
  return (
    <div>
        
    <h1>Homeappliances</h1>
    <div className='Homeappliances'>
       
        <div className="card">
      <img src=".\home\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>Roch RFR-120S-I Single Door Refrigerator <br/>
KSh 18,399.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\home\1 (2).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Roch RFR-150DT-I Top-Mounted Defrost Fridge <br/>
KSh 27,399</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\home\1 (3).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (4).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (5).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>Roch RFR-120S-I Single Door Refrigerator <br/>
KSh 18,399.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      
      <div className="card">
      <img src=".\home\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Roch RFR-150DT-I Top-Mounted Defrost Fridge <br/>
KSh 27,399</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (6).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Ramtons RF/257- 2 Door Direct Cool Fridge <br/>
KSh 47,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (7).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (8).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      </div>
      <div className="card">
      <img src=".\home\1.jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Roch RFR-150DT-I Top-Mounted Defrost Fridge <br/>
KSh 27,399</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>Roch RFR-120S-I Single Door Refrigerator <br/>
KSh 18,399.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (3).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (4).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add ro Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (2).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Ramtons RF/257- 2 Door Direct Cool Fridge <br/>
KSh 47,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (5).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Ramtons RF/257- 2 Door Direct Cool Fridge <br/>
KSh 47,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add  to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (6).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>Roch RFR-120S-I Single Door Refrigerator <br/>
KSh 18,399.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (8).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Roch RFR-150DT-I Top-Mounted Defrost Fridge <br/>
KSh 27,399</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1.jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>
Ramtons RF/257- 2 Door Direct Cool Fridge <br/>
KSh 47,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\home\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Refridgerator</h3>
          <p>VON VART-18DMY, Double Door Fridge, <br/>
KSh 32,699</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      
      </div>
      
    </div>
  )
}

export default Homeappliances
