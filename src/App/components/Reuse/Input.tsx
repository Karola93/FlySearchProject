// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

function Input(props) {
  // eslint-disable-next-line react/prop-types,react/destructuring-assignment
  return <input type={props.type} minLength={props.min} />;
}

export default Input;
