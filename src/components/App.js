import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage.js')
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
          <Route path="/movies/:movieID/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
