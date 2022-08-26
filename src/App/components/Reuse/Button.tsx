import React from 'react';
import classes from 'App/components/Reuse/Button.module.scss';

function Button(props: any) {
  return (
    <button className={classes.button} type={props.type}>
      {props.text}
    </button>
  );
}

export default Button;
