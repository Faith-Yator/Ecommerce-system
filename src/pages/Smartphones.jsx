
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
      <img src=".\phone\1 (1).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 128GB + 8GB, 50MP, Dual SIM, 5000mAh <br/>
KSh 23,399</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\phone\1 (2).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI</h3>
          <p>XIAOMI Redmi A1+, 6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G <br/>
KSh 9,799</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>

      <div className="card">
      <img src=".\phone\1 (3).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 128GB + 8GB, 50MP, Dual SIM, 5000mAh <br/>
KSh 23,399</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (4).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 256GB+8GB,(Dual SIM),5000mAh<br/>
KSh 23,199.</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (5).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI</h3>
          <p>XIAOMI Redmi A1+, 6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G <br/>
KSh 9,799</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      
      <div className="card">
      <img src=".\phone\1 (6).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 128GB + 8GB, 50MP, Dual SIM, 5000mAh <br/>
KSh 23,399</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (7).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 256GB+8GB,(Dual SIM),5000mAh<br/>
KSh 23,199.</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (1).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI</h3>
          <p>XIAOMI Redmi A1+, 6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G <br/>
KSh 9,799</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (8).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 128GB + 8GB, 50MP, Dual SIM, 5000mAh <br/>
KSh 23,399</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (9).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI</h3>
          <p>XIAOMI Redmi A1+, 6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G <br/>
KSh 9,799</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (10).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 128GB + 8GB, 50MP, Dual SIM, 5000mAh <br/>
KSh 23,399</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (11).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI</h3>
          <p>XIAOMI Redmi A1+, 6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G <br/>
KSh 9,799</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (12).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 256GB+8GB,(Dual SIM),5000mAh<br/>
KSh 23,199.</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (13).jpg" alt="Card" className="card-image" />
      <h3>XIAOMI</h3>
          <p>XIAOMI Redmi A1+, 6.52", 2GB+32GB, 8.0MP, 5000mAh, 4G <br/>
KSh 9,799</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (14).jpg" alt="Card" className="card-image" />
      <h3>Tecno Spark</h3>
          <p>Tecno Spark 10 Pro, 6.8", 128GB + 8GB, 50MP, Dual SIM, 5000mAh <br/>
KSh 23,399</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (15).jpg" alt="Card" className="card-image" />
      <h3>GENERIC TABLET</h3>
          <p>Generic 10.1" Tablet 8GB RAM-128GB ROM 4G Full Netcom 5GWIFI <br/>
KSh 16,775
</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (16).jpg" alt="Card" className="card-image" />
      <h3>GENERIC TABLET</h3>
          <p>Generic 10.1" Tablet 8GB RAM-128GB ROM 4G Full Netcom 5GWIFI <br/>
KSh 18,995
</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (17).jpg" alt="Card" className="card-image" />
      <h3>GENERIC TABLET</h3>
          <p>Generic 10.1" Tablet 8GB RAM-128GB ROM 4G Full Netcom 5GWIFI <br/>
KSh 16,995
</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (18).jpg" alt="Card" className="card-image" />
      <h3>GENERIC TABLET</h3>
          <p>Generic 10.1" Tablet 8GB RAM-128GB ROM 4G Full Netcom 5GWIFI <br/>
KSh 17,995
</p>      <button className="card-button" onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
      <div className="card">
      <img src=".\phone\1 (19).jpg" alt="Card" className="card-image" />
      <h3>GENERIC TABLET</h3>
          <p>Generic 10.1" Tablet 8GB RAM-128GB ROM 4G Full Netcom 5GWIFI <br/>
KSh 16,995
</p>      <button className="card-button"onClick={() => handleCardClick('/Cart')}>Add to Cart</button>
      </div>
    
  </div>
      
    </div>
  )
}

export default Smartphones
