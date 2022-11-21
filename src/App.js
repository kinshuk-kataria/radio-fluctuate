import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import useAuth from './api/useAuth';
import { spotifyApi } from './api/spotify';
import { useRef } from 'react';

function App() {
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [currentSong, setCurrentSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState('');
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });
  const [songs, setSongs] = useState([]);

  const accessToken = useAuth();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    //need cleanup
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

    //need cleanup
  }, [accessToken]);

  useEffect(() => {
    if (playlist) {
      setSongs(playlist.items);
      setCurrentSong(playlist.items[0].track);
    }
  }, [playlist]);

  const timeUpdateHandler = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(
      song => song.track.id === currentSong.id
    );

    await setCurrentSong(songs[(currentIndex + 1) % songs.length].track);

    if (isPlaying)
      audioRef.current
        .play()
        .then(() => {})
        .catch(error => {
          audioRef.current.play();
        });
  };

  console.log(songs);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        accessToken={accessToken}
        playlist={playlist}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
      />
      <Song
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        songs={songs}
        playlist={playlist}
        isPlaying={isPlaying}
      />
      <Player
        accessToken={accessToken}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        setIsPlaying={setIsPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong?.preview_url}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
