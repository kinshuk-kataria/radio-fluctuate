import React from 'react';

function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <div className="nav">
      <p className="nav__logo">Radio Fluctuate</p>
      <div
        className="nav__btn"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        <h6>Library</h6>
        <div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
