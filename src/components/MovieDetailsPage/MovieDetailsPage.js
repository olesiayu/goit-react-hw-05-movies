import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';

export default function MovieDetailsPage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieDetails(movieID).then(setMovie);
  }, [movieID]);

  return (
    <>
      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genre_ids}</p>
        </>
      )}
    </>
  );
}

// console.log(setMovie);
