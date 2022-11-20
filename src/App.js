import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from './api/useAuth';

function App() {
  const [libraryStatus, setLibraryStatus] = useState(false);
  const accessToken = useAuth();
  console.log('the token is: ' + accessToken);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        accessToken={accessToken}
      />
      <Song />
      <Player />
    </div>
  );
}

export default App;
