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
        <label htmlFor="from">From </label>
        <input type="text" id="from" />
        <label htmlFor="to"> To </label>
        <input type="text" id="depart" />
      </div>
      <div>
        <div>
          <label htmlFor="depart">Depart </label>
          <input type="text" id="to" />
          <label htmlFor="return"> Return </label>
          <input type="text" id="return" />
        </div>
        <div></div>
      </div>
      <div>
        <Button type="text" text="Search" />
      </div>
    </form>
  );
}

export default SearchBox;
