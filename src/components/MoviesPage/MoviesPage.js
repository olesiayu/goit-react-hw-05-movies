import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';

export default function MoviesPage() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      moviesAPI.fetchSearchMovies(query).then(movies => {
        setSearchMovie([...movies.results]);
      });
    }
  }, [query]);

  // const handleMovieChange = event => {
  //   setSearchQuery(event.currentTarget.value.toLowerCase());
  // };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({
      query: event.currentTarget.elements.query.value,
    });

    if (query === '') {
      return alert('Enter a search query');
    }

    // navigate({ ...location, search: `query=${searchQuery}` });

    // setSearchParams('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          // value={searchQuery}
          // onChange={handleMovieChange}
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
