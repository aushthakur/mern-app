import React from 'react';
import preloader from '../img/preloader.gif'
const Preloader = () => {
  const preloaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Ensure it's on top
  };

  const imgStyle = {
    width: '100px', // Adjust the size as needed
    height: 'auto',
  };

  return (
    <div style={preloaderStyle}>
      <img src={preloader} alt="Loading..." style={imgStyle} />
    </div>
  );
};

export default Preloader;
