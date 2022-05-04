import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const result = moviesAPI.fetchPopularFims().then(films => {
      setPopularMovies([...films.results]);
    });
  }, []);

  return (
    <>
      <h2> Trending today</h2>
      {popularMovies && (
        <ul>
          {popularMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
