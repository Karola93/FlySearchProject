import React from 'react';

function Input(props) {
  return <input type={props.type} minLength={props.min} />;
}

export default Input;
