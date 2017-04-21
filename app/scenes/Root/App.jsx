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
            src="images/logo.svg"
            alt="React Fission"
          />
          <h1>React Fission</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="github">API Example</Link>
          </li>
          <li>
            <a
              href="https://github.com/matheusmariano/react-fission"
              target="_blank"
              rel="noopener noreferrer"
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
