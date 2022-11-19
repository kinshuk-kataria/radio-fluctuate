import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [libraryStatus, setLibraryStatus] = useState(false);
  console.log(libraryStatus);
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song />
      <Player />
    </div>
  );
}

export default App;
