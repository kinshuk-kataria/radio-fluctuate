import React from 'react';
import LibrarySong from './LibrarySong';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

function Library({
  libraryStatus,
  setLibraryStatus,
  setCurrentSong,
  songs,
  isPlaying,
  setSongs,
  audioRef,
  setIsPlaying
}) {
  return (
    <div className={`library ${libraryStatus ? 'library--active' : ''}`}>
      <h4 onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <Arrow className="library__arrow" />
      </h4>

      {songs
        ? songs.map(song => (
            <LibrarySong
              key={song.id}
              trackName={song.name}
              artistName={song.artists[0].name}
              trackCover={song.album.images[0].url}
              song={song}
              id={song.id}
              setCurrentSong={setCurrentSong}
              songs={songs}
              isPlaying={isPlaying}
              setSongs={setSongs}
              audioRef={audioRef}
              setIsPlaying={setIsPlaying}
            />
          ))
        : ''}
    </div>
  );
}

export default Library;
