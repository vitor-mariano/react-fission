import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button {...props}>{props.children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
