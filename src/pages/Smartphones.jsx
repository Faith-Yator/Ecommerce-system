
import './smartphone.css'
import { useNavigate } from 'react-router-dom'

function Smartphones() {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(page);
  };
  return (
    <div>
           
    <h1>SmartPhones & Tablets</h1>
    <div className='smartphone'>
       
        <div className="card">
      <img src=".\src\phone\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\src\phone\1 (2).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\src\phone\1 (3).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (4).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (5).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      
      <div className="card">
      <img src=".\src\phone\1 (6).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (7).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (8).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (9).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (10).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (11).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (12).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (13).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (14).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (15).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (16).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (17).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (18).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\src\phone\1 (19).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
    
  </div>
      
    </div>
  )
}

export default Smartphones
