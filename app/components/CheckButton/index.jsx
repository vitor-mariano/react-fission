import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
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

  constructor(props) {
    super(props);

    this.state = R.pick(['checked'], props);
  }

  buttonDidClick() {
    this.toggleCheck();
  }

  toggleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <button
        id="check-button"
        onClick={() => this.buttonDidClick()}
        type="button"
      >
        {CheckButton.renderMark(this.state.checked)}
      </button>
    );
  }
}

export default CheckButton;
