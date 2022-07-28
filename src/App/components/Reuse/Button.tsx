// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  return (
    // eslint-disable-next-line
    <button className={classes.button} type={props.type}>
      {/* eslint-disable-next-line */}
      {props.text}
    </button>
  );
}

export default Button;
