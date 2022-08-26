import React from 'react';

function Input(props: any) {
  return <input type={props.type} minLength={props.min} value={props.value} onChange={props.onChange} />;
}

export default Input;
