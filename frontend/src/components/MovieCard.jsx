import './MovieCard.css';
import PropTypes from 'prop-types';
const MovieCard = ({ movie, addToWatchlist }) => {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
    </div>
  );
};
MovieCard.propTypes = {
    movie: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    addToWatchlist: PropTypes.func.isRequired,
  };

export default MovieCard;
