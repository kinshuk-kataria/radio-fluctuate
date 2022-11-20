import React, { useEffect, useState } from 'react';
import LibrarySong from './LibrarySong';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import { spotifyApi } from '../api/spotify';

function Library({ libraryStatus, setLibraryStatus, accessToken }) {
  const [playlist, setPlaylist] = useState('');
  console.log(playlist);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    //cleanup
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi
      .getPlaylist('7qIQX7tf0qPLR5E8w1i338')
      .then(data => {
        setPlaylist(data.body.tracks);
      })
      .catch(error => {
        console.log(error);
      });
  }, [accessToken]);

  return (
    <div className={`library ${libraryStatus ? 'library--active' : ''}`}>
      <h4 onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <Arrow className="library__arrow" />
      </h4>

      {playlist
        ? playlist.items.map(item => (
            <LibrarySong
              key={item.track.id}
              trackName={item.track.name}
              artistName={item.track.artists[0].name}
              trackCover={item.track.album.images[0].url}
            />
          ))
        : ''}
    </div>
  );
}

export default Library;
