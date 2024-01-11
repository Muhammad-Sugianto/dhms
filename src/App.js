import React from 'react';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
// import Projects from './components/Projects';
import Profile from './components/Profile';
import AboutBg from './components/AboutBg';
import Rp from './components/Rp';
import RpBg from './components/RpBg';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <AboutBg />
      <Profile />
      <RpBg />
      <Rp />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default App;
