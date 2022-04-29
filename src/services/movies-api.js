const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '919ec07d97461f424c0dcb1ca8e5ed20';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularFims(page) {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
}

export function fetchSearchMovies(searchQuery, page) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`
  );
}

export function fetchMovieDetails(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
  );
}

export function fetchActors(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
}

export function fetchMovieReviews(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
}
