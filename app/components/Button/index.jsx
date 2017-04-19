import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default function Button(props) {
  return (
    <button className="custom-button" {...props}>{props.children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
