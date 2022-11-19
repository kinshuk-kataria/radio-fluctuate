import React from 'react';
import LibrarySong from './LibrarySong';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

function Library({ libraryStatus, setLibraryStatus }) {
  return (
    <div className={`library ${libraryStatus ? 'library--active' : ''}`}>
      <h4 onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <Arrow className="library__arrow" />
      </h4>
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
      <LibrarySong />
    </div>
  );
}

export default Library;
