import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import UserRepositoriesActions from '../../data/user_repositories/redux';
import './styles.scss';

class ProfileScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  static renderRepositories(repositories) {
    return repositories.map(repository => (
      <li
        styleName="repository-card-list__item"
        key={repository.name}
      >
        <div styleName="repository-card">
          <p styleName="repository-card__name">
            <a href={repository.html_url}>{repository.name}</a>
          </p>
          <p styleName="repository-card__description">{repository.description}</p>
          <ul styleName="repository-card-data">
            <li styleName="repository-card-data__item">
              <span>{repository.language}</span>
            </li>
            <li styleName="repository-card-data__item">
              <i className="fas fa-fw fa-star" />
              <span>{repository.stargazers_count}</span>
            </li>
            <li styleName="repository-card-data__item">
              <i className="fas fa-fw fa-code-branch" />
              <span>{repository.forks}</span>
            </li>
          </ul>
        </div>
      </li>
    ));
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
      <ul styleName="repository-card-list">
        {ProfileScene.renderRepositories(this.props.repositories)}
      </ul>
    ) : (
      <div styleName="profile-repositories__loader">
        <i className="fas fa-pulse fa-spinner" />
      </div>
    );
  }

  render() {
    const { profile } = this.props;

    return (
      <div styleName="profile-page">
        <div styleName="profile-page__wrapper">
          <aside styleName="profile-aside">
            <img
              alt="Matheus Mariano"
              styleName="profile-aside__avatar"
              src={profile.avatar_url}
            />
            <h1 styleName="profile-aside__item profile-aside__name">{profile.name}</h1>
            <h3 styleName="profile-aside__item profile-aside__username">{profile.login}</h3>
            <hr styleName="profile-aside__hr" />
            {
              profile.company && (
                <p styleName="profile-aside__item profile-aside__info">
                  <i
                    className="fas fa-fw fa-users"
                    styleName="profile-aside__info-icon"
                  />
                  <span>{profile.company}</span>
                </p>
              )
            }
            {
              profile.location && (
                <p styleName="profile-aside__item profile-aside__info">
                  <i
                    className="fas fa-fw fa-location-arrow"
                    styleName="profile-aside__info-icon"
                  />
                  <span>{profile.location}</span>
                </p>
              )
            }
            {
              profile.email && (
                <p styleName="profile-aside__item profile-aside__info">
                  <i
                    className="fas fa-fw fa-envelope"
                    styleName="profile-aside__info-icon"
                  />
                  <a href="mailto:{profile.email}">{profile.email}</a>
                </p>
              )
            }
          </aside>
          <section styleName="profile-page__content">
            <h1>
              <FormattedMessage id="profile.title" />
            </h1>
            <div>
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
