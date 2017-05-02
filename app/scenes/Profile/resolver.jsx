import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileScene from './';
import ProfileActions from '../../data/profile/redux';

class ProfileSceneResolver extends Component {
  componentWillMount() {
    if (!this.props.isProfileStored) {
      this.props.requestProfile('matheusmariano');
    }
  }

  render() {
    return this.props.success && <ProfileScene />;
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
