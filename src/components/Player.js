import React from 'react';
import { ReactComponent as Play } from '../assets/play.svg';
import { ReactComponent as Prev } from '../assets/prev.svg';
import { ReactComponent as Next } from '../assets/next.svg';
import { ReactComponent as Pause } from '../assets/pause.svg';
import { ReactComponent as Volume } from '../assets/volume.svg';

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

  const volumeChangeHandler = e => {
    audioRef.current.volume = e.target.value;
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
        <Prev
          className="player__btn"
          onClick={() => skipTrackHandler('skip-back')}
        />

        {isPlaying ? (
          <Pause
            width="30"
            height="30"
            className="player__btn"
            onClick={playSongHandler}
          />
        ) : (
          <Play
            width="30"
            height="30"
            className="player__btn"
            onClick={playSongHandler}
          />
        )}

        <Next
          className="player__btn"
          onClick={() => skipTrackHandler('skip-forward')}
        />
      </div>
      <div className="player__footer">
        <Volume width="20" className="player__volume" />
        <input
          id="volume"
          min={0}
          max={1}
          step={0.1}
          type="range"
          onChange={e => volumeChangeHandler}
        />
      </div>
    </div>
  );
}

export default Player;
