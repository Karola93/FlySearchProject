import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  return (
    <button className={classes.button} type="submit">
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      {props.text}
    </button>
  );
}

export default Button;
