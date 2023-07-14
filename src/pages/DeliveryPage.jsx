import React from 'react';
import './DeliveryPage.css';

function DeliveryPage() {
  return (
    <div className="delivery-page">
      <h1>Delivery Information</h1>
      <div className="delivery-details">
        <table className="delivery-address">
          <caption>Delivery Address</caption>
          <tbody>
            <tr>
              <th>Name</th>
              <td>John Doe</td>
            </tr>
            <tr>
              <th>Street Address</th>
              <td>123 Main St</td>
            </tr>
            <tr>
              <th>City, State, Zip</th>
              <td>City, State, Zip</td>
            </tr>
          </tbody>
        </table>
        <div className="delivery-method">
          <h2>Delivery Method</h2>
          <p>Standard Shipping</p>
          <p>Estimated Delivery: July 15, 2023</p>
        </div>
      </div>
      <div className="delivery-progress">
        <h2>Delivery Progress</h2>
        <ul className="progress-list">
          <li className="progress-item completed">Order Placed</li>
          <li className="progress-item active">Order Shipped</li>
          <li className="progress-item">Out for Delivery</li>
          <li className="progress-item">Delivered</li>
        </ul>
      </div>
      <div className="delivery-actions">
        <button className="track-button">Track Order</button>
        <button className="cancel-button">Cancel Order</button>
      </div>
    </div>
  );
}

export default DeliveryPage;
