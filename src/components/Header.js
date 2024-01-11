// Header.js

import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <h1 className="portfolio-title">My Portofolio</h1>
      <div className="social-icons">
        <a href="https://wa.me/085719630447" target="_blank" rel="noopener noreferrer">
          <img src={require('../img/wa.png')} alt="WhatsApp" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/d.mazzxy_" target="_blank" rel="noopener noreferrer">
          <img src={require('../img/ig.png')} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={require('../img/fb.png')} alt="Facebook" className="social-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
