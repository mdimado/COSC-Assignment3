import React from 'react';
import './Header.css';  
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img src="https://media.discordapp.net/attachments/1272236781349113978/1272470360947818570/Discord_Icon_1.png?ex=66c05ddf&is=66bf0c5f&hm=48e192be25ab4c7c8ec28f0052d0be7821f1df0ae89ebe12fd6f6a2575e24d6b&=&format=webp&quality=lossless&width=1012&height=1012" alt="" />
      <nav>
        <ul className="nav">
          <li><Link to="/" className='nav-link'>Home</Link></li>
          <li><Link to="/shop" className='nav-link'>Shop</Link></li>
          <li><Link to="/login" className='nav-link'>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
