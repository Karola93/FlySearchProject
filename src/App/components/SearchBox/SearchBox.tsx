// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import classes from './SearchBox.module.css';
import Button from 'App/components/Reuse/Button';

function SearchBox() {
  return (
    <form className={classes.box}>
      <div>
        <label>
          <input type="radio" /> One way
        </label>
        <label>
          <input type="radio" /> Roundtrip
        </label>
      </div>
      <div>
        <label htmlFor="from">From</label>
        <input type="text" id="from" />
        <label htmlFor="to">To</label>
        <input type="text" id="to" />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Button type="text" text="Search" />
      </div>
    </form>
  );
}

export default SearchBox;
