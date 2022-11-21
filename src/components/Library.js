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
  audioRef
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
              key={song.track.id}
              trackName={song.track.name}
              artistName={song.track.artists[0].name}
              trackCover={song.track.album.images[0].url}
              song={song}
              id={song.track.id}
              setCurrentSong={setCurrentSong}
              songs={songs}
              isPlaying={isPlaying}
              setSongs={setSongs}
              audioRef={audioRef}
            />
          ))
        : ''}
    </div>
  );
}

export default Library;
