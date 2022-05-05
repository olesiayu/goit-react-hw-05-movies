import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName "cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName "reviews" */)
);

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieDetails(movieID).then(setMovie);
  }, [movieID]);

  return (
    <>
      {movie && (
        <>
          <button onClick={() => navigate(-1)}>Go back</button>
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
        </>
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
      <Suspense fallback={<h2>LOADING...</h2>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}
