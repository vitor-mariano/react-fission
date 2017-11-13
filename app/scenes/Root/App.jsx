import React from 'react';
import Routes from './Routes';
import Navbar from './components/Navbar/';
import '../../styles/global/styles.scss';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
}
