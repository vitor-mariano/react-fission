import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import R from 'ramda';
import UserRepositoriesActions from '../../data/user_repositories/redux';
import './styles.scss';

class ProfileScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  static renderIfExists(param, component) {
    return param && component;
  }

  static renderRepositories(repositories) {
    return R.map(repository => (
      <li
        className="repository-card-list__item"
        key={repository.name}
      >
        <div className="repository-card">
          <p className="repository-card__name">
            <a href={repository.html_url}>{repository.name}</a>
          </p>
          <p className="repository-card__description">{repository.description}</p>
          <ul className="repository-card-data">
            <li className="repository-card-data__item">
              <span>{repository.language}</span>
            </li>
            <li className="repository-card-data__item">
              <i className="fa fa-fw fa-star" />
              <span>{repository.stargazers_count}</span>
            </li>
            <li className="repository-card-data__item">
              <i className="fa fa-fw fa-code-fork" />
              <span>{repository.forks}</span>
            </li>
          </ul>
        </div>
      </li>
    ), repositories);
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'profile.page_title' });

    if (!this.props.isRepositoriesStored) {
      this.props.requestRepositories('matheusmariano');
    }
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  waitRepositories() {
    return !this.props.loadingRepositories ? (
      <ul className="repository-card-list">
        {ProfileScene.renderRepositories(this.props.repositories)}
      </ul>
    ) : (
      <div className="profile-repositories__loader">
        <i className="fa fa-pulse fa-spinner" />
      </div>
    );
  }

  render() {
    const profile = this.props.profile;

    return (
      <div className="profile-page">
        <div className="profile-page__wrapper">
          <aside className="profile-aside">
            <img
              alt="Matheus Mariano"
              className="profile-aside__avatar"
              src={profile.avatar_url}
            />
            <h1 className="profile-aside__item profile-aside__name">{profile.name}</h1>
            <h3 className="profile-aside__item profile-aside__username">{profile.login}</h3>
            <hr className="profile-aside__hr" />
            {
              ProfileScene.renderIfExists(profile.company, (
                <p className="profile-aside__item profile-aside__info">
                  <i className="profile-aside__info-icon fa fa-fw fa-users" />
                  <span>{profile.company}</span>
                </p>
              ))
            }
            {
              ProfileScene.renderIfExists(profile.location, (
                <p className="profile-aside__item profile-aside__info">
                  <i className="profile-aside__info-icon fa fa-fw fa-location-arrow" />
                  <span>{profile.location}</span>
                </p>
              ))
            }
            {
              ProfileScene.renderIfExists(profile.email, (
                <p className="profile-aside__item profile-aside__info">
                  <i className="profile-aside__info-icon fa fa-fw fa-envelope" />
                  <a href="mailto:{profile.email}">{profile.email}</a>
                </p>
              ))
            }
          </aside>
          <section className="profile-page__content">
            <h1>
              <FormattedMessage id="profile.title" />
            </h1>
            <div className="profile-repositories">
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
