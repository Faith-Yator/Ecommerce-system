import React, { useState } from 'react';
import './delivery.css';

function Delivery(){
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ ProductName: '', OrderNumber: '', UserName: '' ,Location: ''});

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const add = () => {
    setUsers([...users, newUser]);
    setNewUser({ ProductName: '', OrderNumber: '', UserName: '',Location: ''});
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>OrderNumber</th>
            <th>ProductName</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
               <td>{user.Username}</td>
              <td>{user.ProductName}</td>
              <td>{user.OrderNumber}</td>
              <td>{user.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
      <input
          type="text"
          name="UserName"
          placeholder="UserName"
          value={newUser.UserName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ProductName"
          placeholder="Product Name"
          value={newUser.ProductName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="OrderNumber"
          placeholder="Order Number"
          value={newUser.OrderNumber}
          onChange={handleInputChange}
        />
       
          <input
          type="text"
          name="Location"
          placeholder="Location"
          value={newUser.Location}
          onChange={handleInputChange}
        />
        <button onClick={add}>Add </button>
      </div>
    </div>
  );
};

export default Delivery;
