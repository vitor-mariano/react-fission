import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="todos">Todos</Link>
          </li>
          <li>
            <Link to="profile">API Example</Link>
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
