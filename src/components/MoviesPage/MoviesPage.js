import { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';

export default function MoviesPage() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery) {
      moviesAPI.fetchSearchMovies(searchQuery).then(movies => {
        setSearchMovie([...movies.results]);
      });
    }
  }, [searchQuery]);

  const handleMovieChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      setSearchMovie([]);
      setSearchParams('');
      return alert('Enter a search query');
    }
    setSearchParams({ query });

    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
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
          {searchMovie.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
