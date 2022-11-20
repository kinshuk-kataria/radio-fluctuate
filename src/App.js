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
  const _token = useAuth();
  console.log('the token is: ' + _token);

  const spotifyApi = new SpotifyWebApi({
    clientId: '74c723c7b3c741a1a2246433208896f9',
    clientSecret: '20747220927a4d358de271326200d933'
  });

  useEffect(() => {}, []);

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
