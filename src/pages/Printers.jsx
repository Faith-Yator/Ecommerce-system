import React from 'react'
import './printers.css'
import { useNavigate } from 'react-router-dom';

function Printers() {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(page);
  };
  return (
    <div>
           
    <h1>Printers & Scanners</h1>
    <div className='printers'>
       
        <div className="card">
      <img src=".\src\printers\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>

      <div className="card">
      <img src=".\src\printers\1 (2).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>

      <div className="card">
      <img src=".\src\printers\1 (3).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (4).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (5).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      
      <div className="card">
      <img src=".\src\printers\1 (6).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (7).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (8).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (9).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (10).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (2).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (4).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (7).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (11).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (5).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (3).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (1).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1.jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (5).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      <div className="card">
      <img src=".\src\printers\1 (10).jpg" alt="Card" className="card-image" />
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Click Me</button>
      </div>
      </div>
      
    </div>
  )
}

export default Printers
