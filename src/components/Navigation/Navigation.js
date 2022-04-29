import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        end
        to="/"
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
