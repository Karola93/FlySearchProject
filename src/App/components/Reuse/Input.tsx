// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

function Input(props) {
  return (
    <input
      /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
      type={props.type}
      /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
      minLength={props.min}
      /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
      value={props.value}
      /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
      onChange={props.onChange}
    />
  );
}

export default Input;
