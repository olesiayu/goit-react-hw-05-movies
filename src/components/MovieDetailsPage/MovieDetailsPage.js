import { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import * as moviesAPI from 'services/movies-api';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieDetails(movieID).then(setMovie);
  }, [movieID]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      {movie && (
        <div className={s.film}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={s.info}>
            <h2>
              {movie.title}
              <span>({new Date(movie.release_date).getFullYear()})</span>
            </h2>
            <p>User Score: {(movie.vote_average * 100) / 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
      )}
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}
