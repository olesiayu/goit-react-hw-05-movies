import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        end
        to="/"
        style={({ isActive }) => ({
          marginRight: 10,
          color: isActive ? 'red' : 'black',
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
