import React from 'react';
import Play from '../assets/play.svg';
import Prev from '../assets/prev.svg';
import Next from '../assets/next.svg';
import Up from '../assets/up.svg';
import Down from '../assets/down.svg';

function Player() {
  return (
    <div className="player">
      <div className="player__header">
        <p>00:03</p>
        <div className="player__track">
          <input type="range"></input>
        </div>
        <p>04:00</p>
      </div>
      <div className="player__main">
        <img src={Prev} width="25" alt="Previous Button" />
        <img src={Play} width="30" alt="Play Button" />
        <img src={Next} alt="Next button" width="25" />
      </div>
      <div className="player__footer">
        <img src={Up} width="15" alt="volume up" />

        <input type="range" />

        <img src={Down} width="15" alt="volume down" />
      </div>
    </div>
  );
}

export default Player;
