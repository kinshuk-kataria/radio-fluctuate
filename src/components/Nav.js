import React from 'react';

import Radio from '../assets/radio.svg';

function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <div className="nav">
      <p className="nav__logo">
        <img src={Radio} alt="logo" />
        Radio Fluctuate
      </p>
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
