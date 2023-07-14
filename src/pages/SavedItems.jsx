import React from 'react';
import './SavedItems.css';

const SavedItems = () => {
  return (
    <div className="saved-items">
      <h1 className="page-title">Saved Items</h1>

      <div className="item-container">
        <div className="item">
          <img src="item1.jpg" alt="Item 1" className="item-image" />
          <h3 className="item-title">Item 1</h3>
          <p className="item-description">Description of Item 1</p>
        </div>

        <div className="item">
          <img src="item2.jpg" alt="Item 2" className="item-image" />
          <h3 className="item-title">Item 2</h3>
          <p className="item-description">Description of Item 2</p>
        </div>

        <div className="item">
          <img src="item3.jpg" alt="Item 3" className="item-image" />
          <h3 className="item-title">Item 3</h3>
          <p className="item-description">Description of Item 3</p>
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
