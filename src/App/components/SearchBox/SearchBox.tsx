// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import classes from './SearchBox.module.css';

function SearchBox() {
  return (
    <form className={classes.box}>
      <div>
        <label>
          <input type="radio" /> Oneway
        </label>
        <label>
          <input type="radio" /> There and back
        </label>
      </div>
      <div></div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </form>
  );
}

export default SearchBox;
