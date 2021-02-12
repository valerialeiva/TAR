import React from 'react';
import { FaUserAlt, FaShoppingCart, FaHeartBroken } from 'react-icons/fa';


function Topicons() {
  // Import result is the URL of your image
  return  <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <h2><FaUserAlt />
        <FaShoppingCart />
        <FaHeartBroken />
      </h2>
  </div>

}

export default Topicons;


