import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import { useEffect, useState, useRef } from 'react';
import Nav from './components/Nav';
import useAuth from './api/useAuth';
import { spotifyApi } from './api/spotify';
import Fiber from './components/Fiber';

function App() {
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [currentSong, setCurrentSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState('');
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const [songs, setSongs] = useState([]);

  const accessToken = useAuth();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi
      .getPlaylist('3EMmeF6F28zxhrVQGBMRUZ')
      .then(data => {
        setPlaylist(data.body.tracks);
      })
      .catch(error => {
        console.log(error);
      });
  }, [accessToken]);

  useEffect(() => {
    if (playlist) {
      let songs = playlist.items
        .filter(song => song.track.preview_url !== null)
        .map(song => song.track);

      setSongs(songs);
      setCurrentSong(songs[4]);
    }
  }, [playlist]);

  const timeUpdateHandler = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);

    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    if (isPlaying)
      audioRef.current
        .play()
        .then(() => {})
        .catch(error => {
          audioRef.current.play();
        });
  };

  return (
    <div className="app">
      <Fiber />
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
      <Song currentSong={currentSong} isPlaying={isPlaying} />
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
