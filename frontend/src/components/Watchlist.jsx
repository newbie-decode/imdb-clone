import PropTypes from 'prop-types'; // Import PropTypes
import './Watchlist.css';

const Watchlist = ({ watchlist }) => {
    return (
        <div className="watchlist">
            <h2>My Watchlist</h2>
            {watchlist.length === 0 ? (
                <p>No movies in the watchlist.</p>
            ) : (
                <ul>
                    {watchlist.map((movie) => (
                        <li key={movie.id}>
                            <img src={movie.imageUrl} alt={movie.title} />
                            <span>{movie.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


Watchlist.propTypes = {
    watchlist: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            imageUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Watchlist;
