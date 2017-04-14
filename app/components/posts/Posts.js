import { Component, PropTypes } from 'react'
import R from 'ramda'
import './Posts.scss'

class Posts extends Component {
  static get propTypes() {
    return {
      data: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string
        })
      ).isRequired
    }
  }

  renderItem(list) {
    return R.addIndex(R.map)((post, index) => (
      <li key={index}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    ), list)
  }

  render() {
    return (
      <ul>
        {this.renderItem(this.props.data)}
      </ul>
    )
  }
}

export default Posts
