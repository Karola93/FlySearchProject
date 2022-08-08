// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

function Image(props) {
  // eslint-disable-next-line react/destructuring-assignment,react/prop-types
  return <img src={props.src} alt={props.name} />;
}

export default Image;
