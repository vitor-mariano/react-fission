import { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';

class Posts extends Component {
  static get propTypes() {
    return {
      data: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string,
        }),
      ).isRequired,
    };
  }

  renderItems(list) {
    return R.addIndex(R.map)((post, index) => (
      <li key={index}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    ), list);
  }

  render() {
    return (
      <ul>
        {this.renderItems(this.props.data)}
      </ul>
    );
  }
}

export default Posts;
