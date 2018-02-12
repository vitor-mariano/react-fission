import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileScene from './';
import ProfileActions from '../../data/profile/redux';
import './styles.scss';

class ProfileSceneResolver extends Component {
  static renderLoader() {
    return (
      <div styleName="resolver-container__loader">
        <i className="fas fa-spinner fa-pulse fa-2x" />
      </div>
    );
  }

  componentWillMount() {
    if (!this.props.isProfileStored) {
      this.props.requestProfile('matheusmariano');
    }
  }

  render() {
    return this.props.success ?
      <ProfileScene /> :
      ProfileSceneResolver.renderLoader();
  }
}

ProfileSceneResolver.propTypes = {
  isProfileStored: PropTypes.bool.isRequired,
  success: PropTypes.bool,
  requestProfile: PropTypes.func.isRequired,
};

ProfileSceneResolver.defaultProps = {
  success: null,
};

function mapStateToProps(state) {
  return {
    isProfileStored: state.profile.isProfileStored,
    success: state.profile.requestSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestProfile: username => dispatch(
      ProfileActions.profileRequest(username),
    ),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileSceneResolver),
);
