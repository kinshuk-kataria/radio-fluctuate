import './App.css';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Fluctuate from './components/Fluctutate';

function App() {
  return (
    <div className="App">
      <Player />
      <Song />
      <Library />
      <Fluctuate />
    </div>
  );
}

export default App;
