import React, { useState } from 'react';

import classes from './SearchBox.module.css';
import Button from 'App/components/Reuse/Button';

function SearchBox() {
  const [oneWayClicked, setOneWayClicked] = useState(false);
  const [roundtripClicked, setRoundtripClicked] = useState(false);

  const clickedWayHandler = () => {
    setOneWayClicked(true);
    setRoundtripClicked(false);
  };

  const clickedRoundtripHandler = () => {
    setRoundtripClicked(true);
    setOneWayClicked(false);
  };

  return (
    <form className={classes.search}>
      <div className={classes.margin}>
        <label>
          <input type="radio" name="way" onClick={clickedWayHandler} /> One way
        </label>
        <label>
          <input type="radio" name="way" onClick={clickedRoundtripHandler} /> Roundtrip
        </label>
      </div>
      <div className={classes.margin}>
        <label htmlFor="from">From </label>
        <input type="text" id="from" />
        <label htmlFor="to"> To </label>
        <input type="text" id="depart" />
      </div>
      <div className={classes.margin}>
        {oneWayClicked ? (
          <div>
            <label htmlFor="depart">Depart </label>
            <input type="text" id="depart" />
            <label htmlFor="travelers"> Travelers </label>
            <input type="number" id="travelers" min="1" style={{ width: 35 }} />
          </div>
        ) : (
          <div>
            <label htmlFor="depart">Depart </label>
            <input type="text" id="depart" />
            <label htmlFor="return"> Return </label>
            <input type="text" id="return" />
            <label htmlFor="travelers"> Travelers </label>
            <input type="number" id="travelers" min="1" style={{ width: 35 }} />
          </div>
        )}
      </div>
      <div style={{ alignSelf: 'flex-end' }} className={classes.margin}>
        <Button type="submit" text="Search" />
      </div>
    </form>
  );
}

export default SearchBox;
