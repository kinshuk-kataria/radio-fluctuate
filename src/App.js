import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

function App() {
  return (
    <div className="App">
      <Library />
      <Song />
      <Player />
    </div>
  );
}

export default App;
