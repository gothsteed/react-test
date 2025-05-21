import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, summary, coverImg, genres }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
