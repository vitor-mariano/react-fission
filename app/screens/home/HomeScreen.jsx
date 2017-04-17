import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Actions from '../../redux/PostsRedux';
import Posts from './Posts';
import Button from '../../components/button/Button';
import './HomeScreen.scss';

class HomeScreen extends Component {
  addPost() {
    const post = {
      title: 'My own post',
      body: 'This is my own post',
    };

    this.props.addPost(post);
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <Posts data={this.props.posts} />
        <Button onClick={() => this.addPost()}>Add Post</Button>
      </div>
    );
  }
}

HomeScreen.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
    }),
  ),
};

function mapStateToProps(state) {
  return {
    posts: state.posts.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: post => dispatch(Actions.postAdd(post)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeScreen),
);
