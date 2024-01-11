// AboutMe.js

import React from 'react';
import '../css/AboutMe.css'; // Buat file AboutMe.css untuk menuliskan gaya khusus

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="profile-image-container">
        <img
          className="about-image"
          src={require('../img/profile.jpeg')}
          alt=""
        />
      </div>
      <div className="text-container">
        <h2>Mahardika Dhemas Pratama</h2>
        <p>RPL SMKN 6 Jember</p>
      </div>
    </section>
  );
};

export default AboutMe;
