import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import R from 'ramda';
import ProfileActions from '../../data/profile/redux';
import './styles.scss';

class ProfileScene extends Component {
  componentWillMount() {
    this.props.requestProfile('matheusmariano');
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
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    blog: PropTypes.string,
  }).isRequired,
  requestProfile: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    profile: state.profile.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestProfile: username => dispatch(ProfileActions.profileRequest(username)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileScene),
);
