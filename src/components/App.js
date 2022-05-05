import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navigation = lazy(() =>
  import('./Navigation/Navigation' /* webpackChunkName "navigation" */)
);
const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName "homePage" */)
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName "movie-details-page" */
  )
);
const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName "cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName "reviews" */)
);

export default function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<h2>LOADING...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies/*" element={<MoviesPage />} />
          <Route path="/movies/:movieID/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
