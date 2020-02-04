import React, { useContext } from 'react';
import { NavLink, useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav className="blue darken-1">
      <div className=" container nav-container blue darken-1">
        <Link to="/" className="logo" title="Short Link Maker">
          SLM
        </Link>
        <ul>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
