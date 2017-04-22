import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import './styles.scss';

class CheckButton extends Component {
  static get defaultProps() {
    return {
      checked: false,
      onClick: event => event,
    };
  }

  static get propTypes() {
    return {
      checked: PropTypes.bool,
      onClick: PropTypes.func,
    };
  }

  static renderMark(checked) {
    return checked && <div className="mark" />;
  }

  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };
  }

  toggleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  buttonDidClick(event) {
    this.props.onClick(event);
    this.toggleCheck();
  }

  render() {
    return (
      <button
        id="check-button"
        onClick={event => this.buttonDidClick(event)}
        type="button"
      >
        {CheckButton.renderMark(this.state.checked)}
      </button>
    );
  }
}

export default CheckButton;
