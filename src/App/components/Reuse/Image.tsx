import React from 'react';

function Image(props: any) {
  return (
    <img
      src={props.src}
      alt={props.name}
      style={{ height: props.height, width: props.width }}
      onClick={props.handler}
    />
  );
}

export default Image;
