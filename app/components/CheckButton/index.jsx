import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class CheckButton extends Component {
  static get defaultProps() {
    return {
      checked: false,
    };
  }

  static get propTypes() {
    return {
      checked: PropTypes.bool,
    };
  }

  static renderMark(checked) {
    return checked && <div className="mark" />;
  }

  render() {
    return (
      <div id="check-button">
        {CheckButton.renderMark(this.props.checked)}
      </div>
    );
  }
}

export default CheckButton;
