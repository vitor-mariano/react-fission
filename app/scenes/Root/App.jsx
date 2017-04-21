import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import '../../appearance/main.scss';

export default function App() {
  return (
    <div>
      <nav className="main-menu">
        <h1>React Fission</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="github">API Example</Link>
          </li>
          <li>
            <a href="https://github.com/matheusmariano/react-fission" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  );
}
