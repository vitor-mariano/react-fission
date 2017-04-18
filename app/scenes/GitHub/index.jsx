import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import R from 'ramda';
import GitHubActions from '../../data/github/redux';
import './styles.scss';

class GitHubScreen extends Component {
  static renderRepos(repos) {
    return R.addIndex(R.map)((repo, index) => (
      <li key={index}>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
      </li>
    ), repos);
  }

  componentWillMount() {
    this.props.getRepos('octocat');
  }

  render() {
    return (
      <div>
        <h1>GitHub Scene</h1>
        <ul>
          {GitHubScreen.renderRepos(this.props.repos)}
        </ul>
      </div>
    );
  }
}

GitHubScreen.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
  getRepos: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    repos: state.github.repos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRepos: username => dispatch(GitHubActions.githubGetRepos(username)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GitHubScreen),
);
