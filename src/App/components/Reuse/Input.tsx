// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

function Input(props) {
  return <input type={props.type} minLength={props.min} value={props.value} onChange={props.onChange} />;
}

export default Input;
