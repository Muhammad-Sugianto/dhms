// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p> &copy; Copyright 2024 By Dhemas</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#34dbbc95',
    padding: '10px',
    textAlign: 'center',
    // position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
