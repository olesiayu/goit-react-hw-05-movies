import { Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
}
