import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Routes from './Routes';
import './styles.scss';

export default function App() {
  return (
    <div>
      <nav className="main-menu">
        <Link
          className="logo"
          to="/"
        >
          <img
            alt="React Fission"
            src="images/logo.svg"
          />
          <h1>React Fission</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">
              <FormattedMessage id="home.menu_title" />
            </Link>
          </li>
          <li>
            <Link to="todos">
              <FormattedMessage id="todos.menu_title" />
            </Link>
          </li>
          <li>
            <Link to="profile">
              <FormattedMessage id="profile.menu_title" />
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/matheusmariano/react-fission"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  );
}
