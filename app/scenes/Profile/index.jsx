import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import R from 'ramda';
import UserRepositoriesActions from '../../data/user_repositories/redux';
import './styles.scss';

class ProfileScene extends Component {
  static renderRepositories(repositories) {
    return R.map(repository => (
      <div
        className="repository-wrapper"
        key={repository.name}
      >
        <div className="repository">
          <p className="repository-name">
            <a href={repository.html_url}>{repository.name}</a>
          </p>
          <p className="repository-description">{repository.description}</p>
          <ul>
            <li>
              <span>{repository.language}</span>
            </li>
            <li>
              <i className="fa fa-fw fa-star" />
              <span>{repository.stargazers_count}</span>
            </li>
            <li>
              <i className="fa fa-fw fa-code-fork" />
              <span>{repository.forks}</span>
            </li>
          </ul>
        </div>
      </div>
    ), repositories);
  }

  componentWillMount() {
    document.title = 'Profile - React Fission';

    if (!this.props.isRepositoriesStored) {
      this.props.requestRepositories('matheusmariano');
    }
  }

  waitRepositories() {
    return !this.props.loadingRepositories
      ? ProfileScene.renderRepositories(this.props.repositories)
      : (
        <div className="loader">
          <i className="fa fa-pulse fa-spinner" />
        </div>
      );
  }

  render() {
    const profile = this.props.profile;

    return (
      <div id="profile-scene">
        <div className="container">
          <aside className="profile">
            <img
              alt="Matheus Mariano"
              className="avatar"
              src={profile.avatar_url}
            />
            <h1 className="name">{profile.name}</h1>
            <p className="username">{profile.username}</p>
            <hr />
            <p className="info">
              <i className="fa fa-fw fa-users" />
              <span>{profile.company}</span>
            </p>
            <p className="info">
              <i className="fa fa-fw fa-location-arrow" />
              <span>{profile.location}</span>
            </p>
            <p className="info">
              <i className="fa fa-fw fa-envelope" />
              <a href="mailto:{profile.email}">{profile.email}</a>
            </p>
          </aside>
          <section className="content">
            <h1>Repositories</h1>
            <div className="repositories">
              {this.waitRepositories()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

ProfileScene.propTypes = {
  isRepositoriesStored: PropTypes.bool.isRequired,
  loadingRepositories: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      forks: PropTypes.number.isRequired,
      language: PropTypes.string,
      name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  requestRepositories: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isRepositoriesStored: state.userRepositories.isRepositoriesStored,
    loadingRepositories: state.userRepositories.requesting,
    profile: state.profile.profile,
    repositories: state.userRepositories.repositories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestRepositories: username => dispatch(
      UserRepositoriesActions.userRepositoriesRequest(username),
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScene);
