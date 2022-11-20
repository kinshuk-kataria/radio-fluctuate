import React from 'react';

function LibrarySong({ trackName, artistName, trackCover }) {
  return (
    <div className="librarySong">
      <img src={trackCover} alt="song cover" />
      <div className="librarySong_info">
        <h5>{trackName}</h5>
        <h6>{artistName}</h6>
      </div>
    </div>
  );
}

export default LibrarySong;
