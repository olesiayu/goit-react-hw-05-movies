import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
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
      </Routes>
    </>
  );
}
