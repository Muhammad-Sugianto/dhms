import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/Profile.css';

const Profile = () => {
  const backgroundSpring = useSpring({
    from: { backgroundPosition: '0% 0%' },
    to: { backgroundPosition: '100% 100%' },
    config: { duration: 5000 },
    loop: true, // Set loop to true for continuous animation
  });

  return (
    <animated.section
      className="profile"
      style={{
        backgroundImage: `url(${require('../img/background.jpg')})`,
        backgroundSize: 'cover',
        ...backgroundSpring,
      }}
    >
      <div className="profile-header">
        <animated.img
          className="profile-image"
          src={require('../img/profile.jpeg')}
          alt="Profil"
        />
        <div className="profile-info">
          <h1 className="profile-name">Nama          : Mahardika Dhemas Pratama</h1>
          <h1 className="profile-name">Jenis Kelamin : Laki - Laki</h1>
          <h1 className="profile-name">Tanggal Lahir : 25 November 2005</h1>
          <h1 className="profile-name">Agama         : Islam</h1>
          <h1 className="profile-name">Alamat        : Kec.Sumberbaru, Kab.Jember</h1>
        </div>
      </div>
    </animated.section>
  );
};

export default Profile;
