import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import s from './App.module.css';

export default function App() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="movies/*" element={<MoviesPage />} /> */}
        <Route path="/movies/:movieID/*" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}
