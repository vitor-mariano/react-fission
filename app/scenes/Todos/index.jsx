import React from 'react';
import { withRouter } from 'react-router-dom';
import Todos from './components/Todos/';
import './styles.scss';

function TodosScene() {
  return (
    <div id="todos-scene">
      <header className="page-header">
        <h1>Todos</h1>
      </header>
      <section className="flex flex-center">
        <Todos />
      </section>
    </div>
  );
}

export default withRouter(TodosScene);
