import React, { useState } from 'react';
import './sidenav.css';
import { MdComputer } from 'react-icons/md';
import { AiOutlineShoppingCart, AiOutlinePrinter } from 'react-icons/ai';
import { FaNetworkWired } from 'react-icons/fa';
import { FcMultipleSmartphones } from 'react-icons/fc';
import { PiTelevisionSimpleDuotone } from 'react-icons/pi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function Sidenav() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // Handle additional logic for the selected category
    // For example, navigate to a specific page or update the state accordingly
  };

  return (
    <div className="sidenav">
      
      <div className="sidenav_wrapper">
        <select
          className="category-dropdown"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a Category</option>
          <option value="computers">
            <MdComputer className="icon2" /> Computers
          </option>
          <option value="smartphones">
            <FcMultipleSmartphones className="icon2" /> SmartPhones & Tablets
          </option>
          <option value="tvs">
            <PiTelevisionSimpleDuotone className="icon2" /> Tv's & Audios
          </option>
          <option value="homeAppliances">
            <CgSmartHomeRefrigerator className="icon2" /> HomeAppliances
          </option>
          <option value="networking">
            <FaNetworkWired className="icon2" /> Networking devices
          </option>
          <option value="printers">
            <AiOutlinePrinter className="icon2" /> Printers & Scanners
          </option>
        </select>
      </div>
    </div>
  );
}

export default Sidenav;
