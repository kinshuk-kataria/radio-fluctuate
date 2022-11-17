import React from 'react';
import sample from '../assets/sample.jpg';

function Song() {
  return (
    <div className="song">
      <div className="song__display">
        <img src={sample} alt="display"></img>
      </div>
      <div className="song__name">
        <h4>Let you down</h4>
        <h6>Dawid Padsiadle</h6>
      </div>
    </div>
  );
}

export default Song;
