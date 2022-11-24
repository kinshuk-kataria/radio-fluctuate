import React from 'react';

function LibrarySong({
  trackName,
  artistName,
  trackCover,
  setCurrentSong,
  song,
  songs,
  id,
  isPlaying,
  setSongs,
  audioRef,
  setIsPlaying
}) {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add active state
    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true
        };
      } else {
        return {
          ...song,
          active: false
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className={`librarySong ${song.active ? 'selected' : ''}`}
      onClick={songSelectHandler}
    >
      <img src={trackCover} alt="song cover" />
      <div className="librarySong_info">
        <h5>{trackName}</h5>
        <h6>{artistName}</h6>
      </div>
    </div>
  );
}

export default LibrarySong;
