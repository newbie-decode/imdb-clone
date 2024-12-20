import  { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import Watchlist from './components/Watchlist';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  useEffect(() => {
    axios
      .get('http://localhost:3000/movies')
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies. Please try again later.');
        setLoading(false);
      });
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>IMDb Clone</h1>
      </header>

      <main className="app-content">
        {loading && <p className="loading">Loading movies...</p>}
        {error && <p className="error">{error}</p>}

        <div className="movies">
          {!loading && !error && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
          ))}
        </div>

        <aside className="watchlist-container">
          <Watchlist watchlist={watchlist} />
        </aside>
      </main>
    </div>
  );
};

export default App;
