import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import R from 'ramda';
import './styles.scss';

class ProfileScene extends Component {
  render() {
    return (
      <div id="profile-scene">
        <div className="container">
          <aside className="profile">
            <img
              alt="Matheus Mariano"
              className="avatar"
              src="https://avatars2.githubusercontent.com/u/2306588?v=3&s=460"
            />
            <h1 className="name">Matheus Mariano</h1>
            <p className="username">matheusmariano</p>
            <hr />
            <p className="info">
              <i className="fa fa-fw fa-users" />
              <span>Bemind Tecnologia</span>
            </p>
            <p className="info">
              <i className="fa fa-fw fa-location-arrow" />
              <span>Recife, Brazil</span>
            </p>
            <p className="info">
              <i className="fa fa-fw fa-envelope" />
              <a href="mailto:vmatheus.mariano@gmail.com">vmatheus.mariano@gmail.com</a>
            </p>
          </aside>
          <section className="content">
            <h1>Repositories</h1>
            <div className="repositories">
              {
                R.times(R.always((
                  <div className="repository-wrapper">
                    <div className="repository">
                      <p className="repository-name">
                        <a href="https://github.com/matheusmariano/aula-multi-auth">aula-multi-auth</a>
                      </p>
                      <p>Repositório da vídeo-aula sobre multiautenticação com o Laravel 5.2</p>
                      <ul>
                        <li>
                          <span>PHP</span>
                        </li>
                        <li>
                          <i className="fa fa-fw fa-star" />
                          <span>10</span>
                        </li>
                        <li>
                          <i className="fa fa-fw fa-code-fork" />
                          <span>6</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )), 5)
              }
            </div>
          </section>
        </div>
      </div>
    );
  }
}

ProfileScene.propTypes = {
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileScene),
);
