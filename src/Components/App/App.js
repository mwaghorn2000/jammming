import './App.css';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';
import { Playlist } from '../Playlist';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
