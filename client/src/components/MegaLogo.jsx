import React from 'react';
import logoAbril from '../img/logo-Abril.jpg'; // Tell webpack this JS file uses this image

function Header() {
  // Import result is the URL of your image
  return <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={logoAbril} width="100" height="100"  alt="" />
        </div>
}

export default Header;



