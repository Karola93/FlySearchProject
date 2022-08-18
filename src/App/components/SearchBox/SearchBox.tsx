import React from 'react';

import classes from './SearchBox.module.css';
import Button from 'App/components/Reuse/Button';

function SearchBox() {
  return (
    <form className={classes.search}>
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
          <label htmlFor="travelers"> Travelers </label>
          <select name="travelers" id="travelers">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div></div>
      </div>
      <div>
        <Button type="submit" text="Search" />
      </div>
    </form>
  );
}

export default SearchBox;
