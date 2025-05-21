import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  

function Detail() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setIsLoading(false);
    }

    // useEffect는 동기함수만 받을 수 있음
    useEffect(() => {
        getMovie();

    }, [])



  return (
    isLoading ? <h1>Loading</h1> : (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    )
  );
}

export default Detail;
