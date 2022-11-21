import React from 'react';
import sample from '../assets/sample.jpg';

function Song({ currentSong, isPlaying }) {
  return (
    <div className="song">
      <div className="song__cover">
        <img
          src={currentSong ? currentSong.album?.images[0]?.url : sample}
          alt="display"
          className={`cover ${isPlaying ? 'cover--spin' : ''}`}
        ></img>
      </div>
      <div className="song__name">
        <h4>{currentSong?.name}</h4>
        <h6>{currentSong?.artists[0]?.name}</h6>
      </div>
    </div>
  );
}

export default Song;
