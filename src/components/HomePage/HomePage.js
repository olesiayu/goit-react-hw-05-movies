import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';

export default function HomePage() {
  const location = useLocation();
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchPopularFims().then(films => {
      setPopularMovies([...films.results]);
    });
  }, []);

  return (
    <>
      <h2> Trending today</h2>
      {popularMovies && (
        <ul>
          {popularMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title} </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
