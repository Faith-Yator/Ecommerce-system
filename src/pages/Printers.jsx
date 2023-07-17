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
      <img src=".\printers\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>

      <div className="card">
      <img src=".\printers\1 (2).jpg" alt="Card" className="card-image" />
      <h3>HP</h3>
          <p>HP Scan,Print,Photo Copy With DeskJet 2710 Wireless<br/>
KSh 12,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>

      <div className="card">
      <img src=".\printers\1 (3).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (4).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (5).jpg" alt="Card" className="card-image" />
      <h3>Canon PIXMA</h3>
          <p>Canon PIXMA G2420 Printer Scanner Copier, Ink Tank-Black<br/>
KSh 22,559</p>  
          <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      
      <div className="card">
      <img src=".\printers\1 (6).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
      <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>        <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (7).jpg" alt="Card" className="card-image" />
      <h3>Canon PIXMA</h3>
          <p>Canon PIXMA G2420 Printer Scanner Copier, Ink Tank-Black<br/>
KSh 22,559</p>
      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (8).jpg" alt="Card" className="card-image" />
      <h3>HP</h3>
          <p>HP Scan,Print,Photo Copy With DeskJet 2710 Wireless<br/>
KSh 12,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (9).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (10).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (2).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (4).jpg" alt="Card" className="card-image" />
      <h3>Canon PIXMA</h3>
          <p>Canon PIXMA G2420 Printer Scanner Copier, Ink Tank-Black<br/>
KSh 22,559</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (7).jpg" alt="Card" className="card-image" />
      <h3>HP</h3>
          <p>HP Scan,Print,Photo Copy With DeskJet 2710 Wireless<br/>
KSh 12,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (11).jpg" alt="Card" className="card-image" />
      <h3>Canon PIXMA</h3>
          <p>Canon PIXMA G2420 Printer Scanner Copier, Ink Tank-Black<br/>
KSh 22,559</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (5).jpg" alt="Card" className="card-image" />
      <h3>HP</h3>
          <p>HP Scan,Print,Photo Copy With DeskJet 2710 Wireless<br/>
KSh 12,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (3).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Canon PIXMA</h3>
          <p>Canon PIXMA G2420 Printer Scanner Copier, Ink Tank-Black<br/>
KSh 22,559</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1.jpg" alt="Card" className="card-image" />
      <h3>Canon PIXMA</h3>
          <p>Canon PIXMA G2420 Printer Scanner Copier, Ink Tank-Black<br/>
KSh 22,559</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (5).jpg" alt="Card" className="card-image" />
      <h3>HP</h3>
          <p>HP Scan,Print,Photo Copy With DeskJet 2710 Wireless<br/>
KSh 12,000</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      <div className="card">
      <img src=".\printers\1 (10).jpg" alt="Card" className="card-image" />
      <h3>Epson</h3>
          <p>Epson L3210 Ink Tank Printer - Print, Scan, Copy<br/>
KSh 29,450</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add To Cart</button>
      </div>
      </div>
      
    </div>
  )
}

export default Printers
