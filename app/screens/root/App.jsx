import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import '../../appearance/main.scss';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="github">GitHub</Link>
        </li>
      </ul>
      <Routes />
    </div>
  );
}

export default App;
