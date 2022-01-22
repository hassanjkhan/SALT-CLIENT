import React from 'react';
import hero from '../images/hero.png';

const HomeHero = () => {
  return (
    <div
      style={{
        height: 500,
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  );
};

export default HomeHero;
