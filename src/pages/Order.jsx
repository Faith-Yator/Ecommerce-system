import React from 'react'
import './order.css'
import Delivery from './Delivery'

function order() {
  return (
    <div className='order'>
      <div className="placement">
        <h4>To place an order follow the steps below</h4>
    <p>
    1.Search for an item using the search bar<br/>
2. Compare prices & vendor score<br/>
3.Add to your cart<br/>
4. Then pay at checkout
    </p>
    <div className="card">
          <img src="./src/home/1 (1).jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
        <Delivery/>
    </div>

    </div>
  )
}

export default order
