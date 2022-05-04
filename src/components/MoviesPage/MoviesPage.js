import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';

export default function MoviesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState(() => {
    return JSON.parse(window.localStorage.getItem('searchMovie')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('searchMovie', JSON.stringify(searchMovie));
  }, [searchMovie]);

  const handleMovieChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return alert('Enter a search query');
    }

    moviesAPI.fetchSearchMovies(searchQuery).then(movies => {
      setSearchMovie([...movies.results]);
    });

    navigate({ ...location, search: `query=${searchQuery}` });

    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleMovieChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      {searchMovie && (
        <ul>
          {searchMovie.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
