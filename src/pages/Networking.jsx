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
      <img src=".\network\1 (1).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI Mi</h3>
          <p>XIAOMI Mi 4C Wireless Router 2.4GHz 300Mbps<br/>
KSh 2,199</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\network\1 (2).jpg" alt="Card" className="card-image" />
      <h3>TP Link </h3>
          <p>TP Link TL-WR840N 300Mbps 2.4GHz Wireless Router 4in1<br/>
KSh 2,500</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\network\1 (6).jpg" alt="Card" className="card-image" />
      <h3>USB WIFI</h3>
          <p>Generic 600Mbps USB WiFi Adapter Free Driver Wireless Network Card<br/>
KSh 1,059.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (3).jpg" alt="Card" className="card-image" />
      <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (4).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI Mi</h3>
          <p>XIAOMI Mi 4C Wireless Router 2.4GHz 300Mbps<br/>
KSh 2,199</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      
      <div className="card">
      <img src=".\network\1 (5).jpg" alt="Card" className="card-image" />
      <h3>TP Link </h3>
          <p>TP Link TL-WR840N 300Mbps 2.4GHz Wireless Router 4in1<br/>
KSh 2,500</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (6).jpg" alt="Card" className="card-image" />
      <h3>USB WIFI</h3>
          <p>Generic 600Mbps USB WiFi Adapter Free Driver Wireless Network Card<br/>
KSh 1,059.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (7).jpg" alt="Card" className="card-image" />
      <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (3).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI Mi</h3>
          <p>XIAOMI Mi 4C Wireless Router 2.4GHz 300Mbps<br/>
KSh 2,199</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (2).jpg" alt="Card" className="card-image" />
      <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (1).jpg" alt="Card" className="card-image" />
      <h3>TP Link </h3>
          <p>TP Link TL-WR840N 300Mbps 2.4GHz Wireless Router 4in1<br/>
KSh 2,500</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (4).jpg" alt="Card" className="card-image" />
      <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (3).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI Mi</h3>
          <p>XIAOMI Mi 4C Wireless Router 2.4GHz 300Mbps<br/>
KSh 2,199</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (1).jpg" alt="Card" className="card-image" />
      <h3>USB WIFI</h3>
          <p>Generic 600Mbps USB WiFi Adapter Free Driver Wireless Network Card<br/>
KSh 1,059.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (5).jpg" alt="Card" className="card-image" />
      <h3>TP Link </h3>
          <p>TP Link TL-WR840N 300Mbps 2.4GHz Wireless Router 4in1<br/>
KSh 2,500</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (7).jpg" alt="Card" className="card-image" />
      <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (6).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI Mi</h3>
          <p>XIAOMI Mi 4C Wireless Router 2.4GHz 300Mbps<br/>
KSh 2,199</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (2).jpg" alt="Card" className="card-image" />
      <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (1).jpg" alt="Card" className="card-image" />
      <h3>TP Link </h3>
          <p>TP Link TL-WR840N 300Mbps 2.4GHz Wireless Router 4in1<br/>
KSh 2,500</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\network\1 (7).jpg" alt="Card" className="card-image" />
      <h3>tenda </h3>
          <p>tenda N300 300 Mbps Wireless WiFi Router<br/>
KSh 1,999</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
  
      </div>
      
    </div>
  )
}

export default Networking
