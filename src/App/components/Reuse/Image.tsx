// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

function Image(props) {
  return <img src={props.src} alt={props.name} style={{ height: props.height, width: props.width }} />;
}

export default Image;
