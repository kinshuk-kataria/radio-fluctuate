import React from 'react';
import Play from '../assets/play.svg';
import Prev from '../assets/prev.svg';
import Next from '../assets/next.svg';
import Up from '../assets/up.svg';
import Down from '../assets/down.svg';

function Player({
  accessToken,
  songInfo,
  setSongInfo,
  audioRef,
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  setSongs
}) {
  const getTime = time => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const activeLibraryHandler = nextPrev => {
    const newSongs = songs.map(song => {
      if (song.track.id === nextPrev.id) {
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
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async direction => {
    let currentIndex = songs.findIndex(
      song => song.track.id === currentSong.id
    );
    console.log(currentIndex);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length].track);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length].track);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1].track);
        activeLibraryHandler(songs[songs.length - 1].track);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length].track);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length].track);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  if (!accessToken) return null;
  return (
    <div className="player">
      <div className="player__header">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="player__track">
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          ></input>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="player__main">
        <img
          src={Prev}
          width="25"
          alt="Previous Button"
          onClick={() => skipTrackHandler('skip-back')}
        />
        <img
          src={Play}
          width="30"
          alt="Play Button"
          onClick={playSongHandler}
        />
        <img
          src={Next}
          alt="Next button"
          width="25"
          onClick={() => skipTrackHandler('skip-forward')}
        />
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
